class ParentsController < ApplicationController

  def new
    if request.xhr?
      render "parents/new", layout: false
    end
  end

  def create
    @parent = Parent.new(user_params)
    if @parent.save
      session[:parent_id] = @parent.id
      redirect_to pages_path
    else
      @errors = @parent.errors.full_messages
      render "/parents/new"
    end
  end

  def transfer
    parent = current_user
    @child = parent.children.find_by(name: transfer_params["child"])
    new_amount = @child.undeposited_funds += transfer_params["amount"].to_i
    @child.update_attribute("undeposited_funds", new_amount)
    @children = @child.parent.children
    render json:  @children.as_json(methods: [:total_balance, :dollars], include:{ banks:{methods: [:type, :dollars]} })
  end


  private
  def user_params
    params.require(:parent).permit(:name, :email, :username, :password)
  end

  def transfer_params
    params.permit(:child, :amount)
  end

end

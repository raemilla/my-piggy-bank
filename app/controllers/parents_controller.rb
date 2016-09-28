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

    if transfer_params[:amount].include? "."
      amount = float_to_whole(params[:amount])
    else
      amount = transfer_params[:amount].to_i
    end

    @child = parent.children.find_by(name: transfer_params["child"])

    new_amount = @child.undeposited_funds += amount
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


  def float_to_whole(float_string)
    if float_string.include? ","
      float_string.gsub(/[\s,]/,"")
    else
    (float_string.to_f * 100 ).round
    end
  end

end

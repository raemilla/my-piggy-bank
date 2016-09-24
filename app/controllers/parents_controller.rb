class ParentsController < ApplicationController

  def new

  end

  def create
    @parent = Parent.new(user_params)
    if @parent.save
      session[:parent_id] = @parent.id
      redirect_to pages_path
    else
      @errors = @parent.errors.full_messages
    end
  end

  def transfer
    parent = current_user
    @child = parent.children.find_by(name: transfer_params["child"])
		@child.update_attribute("undeposited_funds", transfer_params["amount"].to_i)
  end

  private
  def user_params
    params.require(:parent).permit(:name, :email, :username, :password)
  end

  def transfer_params
    params.permit(:child, :amount)
  end
end

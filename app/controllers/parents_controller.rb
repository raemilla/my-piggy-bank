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

  private
  def user_params
    params.require(:user).permit(:name, :email, :username)
  end

end

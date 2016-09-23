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
    params.require(:parent).permit(:name, :email, :username, :password)
  end

end

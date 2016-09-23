class SessionsController < ApplicationController
  def new
  end

  def create
    @parent = Parent.find_by(email: params[:user][:email])
    #@child = Child.find_by(email: params[:user][:email])
    if @parent && @parent.authenticate(params[:user][:password])
      session[:parent_id] = @parent.id
      redirect_to pages_path
    elsif @child && @child.authenticate(params[:user][:password])
      session[:child_id] = @child.id
      redirect_to pages_path
    else
      @errors = ['Invalid email/password']
      redirect_to login_path
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end

end

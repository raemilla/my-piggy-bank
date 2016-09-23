class ChildrenController < ApplicationController
  def new
  end

  def create
    child = Child.new(child_params)
    child.parent = current_user
    debugger
    if child.save
      Investment.new(child: child)
      Donation.new(child: child)
      Saving.new(child: child)
      Spending.new(child: child)
      redirect_to root_path
    else
      flash[:alert] = "Error creating child"
      redirect_to root_path
    end
  end

  private
  def child_params
    params.require(:child).permit(:name, :username, :password)
  end
end

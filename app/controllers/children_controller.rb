class ChildrenController < ApplicationController
  def new
  end

  def create
    child = Child.new(child_params)
    child.parent = current_user
    children = current_user.children
    if child.save
      Investment.create(child: child, interest_rate: params[:interest_rate], start_date: Date.today)
      Donation.create(child: child)
      Saving.create(child: child, save_item: params[:child][:save_item])
      Spending.create(child: child)
      render json:children.as_json(include: {banks: {methods: :type}})
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

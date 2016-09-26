class RewardsController < ApplicationController

  def create
    parent = current_user
    children = parent.children
    if params[:child] == "All"
      children.each do |child|
        reward = child.rewards.build(reward_params)
        reward.save
      end
      redirect_to root_path
    else
      child = children.find_by(name: params[:child])
      reward = child.rewards.build(reward_params)
      reward.save
      redirect_to root_path
    end
  end

  private
  def reward_params
    params.permit(:item, :amount)
  end
end

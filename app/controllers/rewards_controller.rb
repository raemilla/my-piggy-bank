class RewardsController < ApplicationController

  def create
    parent = current_user
    children = parent.children
    if params[:child] == "All"
      children.each do |child|
        reward = child.rewards.build(reward_params)
        reward.save
      end
    else
      child = children.find_by(name: params[:child])
      reward = child.rewards.build(reward_params)
      reward.save
    end
    rewards = parent.rewards
    render json: rewards.as_json(include: {child: {only: :name}})
  end

  def destroy
    parent = current_user
    reward = parent.rewards.find_by(id: params[:id])
    reward.destroy
    rewards = parent.rewards
    render json: rewards.as_json(include: {child: {only: :name}})
  end

  private
  def reward_params
    params.permit(:item, :amount)
  end
end

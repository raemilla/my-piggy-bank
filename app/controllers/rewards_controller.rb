class RewardsController < ApplicationController

  def create
    parent = current_user
    children = parent.children
    if reward_params[:amount].include? "."
      amount = float_to_whole(reward_params[:amount])
    else
      amount = reward_params[:amount].to_i
    end

    if params[:child] == "All"
      children.each do |child|
        reward = child.rewards.build(item: reward_params[:item], amount: amount)
        reward.save
      end
    else
      child = children.find_by(name: params[:child])
      reward = child.rewards.build(item: reward_params[:item], amount: amount)
      reward.save
    end

    


    rewards = parent.rewards
   
    render json: rewards.as_json(methods: :dollars, include: {child: {only: :name}})
  end

  def destroy
    parent = current_user
    reward = parent.rewards.find_by(id: params[:id])
    reward.destroy
    rewards = parent.rewards
    render json: rewards.as_json(methods: :dollars, include: {child: {only: :name}})
  end

  private

  def reward_params
    params.permit(:item, :amount)
  end

   def float_to_whole(float_string)
    if float_string.include? ","
      float_string.gsub(/[\s,]/,"")
    else
    (float_string.to_f * 100 ).round
    end
  end


end

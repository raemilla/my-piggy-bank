class NotificationsController < ApplicationController

	def index
		
		 @parent = current_user
		 @notifications = @parent.notifications.as_json(include:{child:{only: :name}})
		 render json: @notifications
	end

	def create
		
		@child = current_user
		amount = params[:amount].to_i
		
		bank = @child.banks.find_by(type: params[:type])
		new_amount = bank.balance - amount
		if new_amount < 0
		 	@error = "Sorry, #{current_user.name}, #{bank.type} does not have enough money."
		 	render json: {error: @error.as_json}
		else
		 	Notification.create(child_id: current_user.id, text: params[:text])
		end

	end


	def destroy
		@notification = Notification.find(params[:id])
		@notification.destroy
		@parent = current_user
		@notifications = @parent.notifications.as_json(include:
			{child:{only: :name}})
		render json:@notifications
	end


end



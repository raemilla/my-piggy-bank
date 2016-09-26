class NotificationsController < ApplicationController

	def index
		
		@parent = current_user
		 @notifications = @parent.notifications.as_json(include:{child:{only: :name}})
		 render json: @notifications
	end

	def create
		Notification.create(child_id: current_user.id, text: params[:text])
		@parent = current_user
		@notifications = @parent.notifications.as_json(incluse:{child:{only: :name}})
		render json: @notifications
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



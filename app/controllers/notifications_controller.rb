class NotificationsController < ApplicationController

	def index
		
		 @parent = current_user
		 @notifications = @parent.notifications.as_json(include:{child:{only: :name}})
		 render json: @notifications
	end

	def create
		
		@child = current_user

		if params[:amount].include? "."
			amount = float_to_whole(params[:amount])
		else
			amount = (params[:amount].to_i * 100)
		end

		
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

private
def float_to_whole(float_string)
	if float_string.include? ","
		float_string.gsub(/[\s,]/,"")
	else
	(float_string.to_f * 100 ).round
	end
end

end



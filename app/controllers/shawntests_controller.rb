class ShawntestsController < ApplicationController

	def index
		@children = Parent.first.children.as_json
		@parent = Parent.first.as_json(include: {children:{only: :name}, banks:{}})
		@notifications = Parent.first.notifications.as_json(include: {child:{ only: :name}})

	end

	def create
		@child = Child.find(params[:child_id])
			@child.undeposited_files += params[:amount].to_i
	end

end

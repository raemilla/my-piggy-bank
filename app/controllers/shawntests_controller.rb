class ShawntestsController < ApplicationController

	def index
		@children = Parent.first.children.as_json
	end

	def create
		@child = Child.find(params[:child_id])
			@child.undeposited_files += params[:amount].to_i
	end

end

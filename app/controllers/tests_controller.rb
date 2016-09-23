class TestsController < ApplicationController
	def index
		@child = Child.first.as_json
	end
end

class RachtestsController < ApplicationController
  def index
		@child = Child.first.as_json
		@parent = Parent.first.as_json
    render '/tests/index'
	end
end

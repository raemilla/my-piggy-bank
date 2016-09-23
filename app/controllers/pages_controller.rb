class PagesController < ApplicationController
  def index
    require_user
    @current_user = current_user.as_json(include: {children: {only: :name}})
  end
end

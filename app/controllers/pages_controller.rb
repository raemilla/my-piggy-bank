class PagesController < ApplicationController
  def index
    require_user
  end
end

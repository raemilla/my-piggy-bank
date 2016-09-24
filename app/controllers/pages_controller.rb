class PagesController < ApplicationController
  def index
    require_user
    if parent?
      @current_user = current_user.as_json(include: { children: {
                                                          include: {banks: {only: [:balance, :type]}}
                                                          }})
    else
      @current_user = current_user.as_json(include: :banks)
    end
  end
end

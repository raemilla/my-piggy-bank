class PagesController < ApplicationController
  def index
    require_user
    if parent?
      @current_user = current_user.as_json(include: { children: {
                                                                include: {banks: {only: [:balance, :type]}}
                                                                }})
    else

      investment_bank = current_user.banks.find{|b| b.type == 'Investment' }

       total = investment_bank.calculate_interest
       debugger
      @current_user = current_user.as_json(include: {banks: {methods: :type}})
    end
  end
end

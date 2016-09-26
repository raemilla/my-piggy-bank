class PagesController < ApplicationController
  def index
    require_user
    if parent?
      @current_user = current_user.as_json(include: { children: {
                                                                include: {banks: {only: [:balance, :type]}}
                                                                }})
    else

      investment_bank = current_user.banks.find_by(type: 'Investment')
      old_balance = investment_bank.balance
      total = investment_bank.calculate_interest
      investment_bank.save

      @interest = total - old_balance

      @current_user = current_user.as_json(include: {banks: {methods: :type}})
    end
  end
end

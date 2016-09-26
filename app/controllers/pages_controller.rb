class PagesController < ApplicationController
  def index

    if login?
      if parent?
        @current_user = current_user.as_json(include: { children: {methods: :total_balance,
          include: {banks: {only: [:balance, :type]}}}})
        else

          investment_bank = current_user.banks.find_by(type: 'Investment')
          old_balance = investment_bank.balance
          total = investment_bank.calculate_interest
          investment_bank.save

          @interest = total - old_balance
          @current_user = current_user.as_json(include: {banks: {methods: :type}})
        end
      else
        redirect_to login_path
      end
  end

end

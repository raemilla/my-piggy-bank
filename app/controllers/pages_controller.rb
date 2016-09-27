class PagesController < ApplicationController
  def index

    if login?
      if parent?
        @current_user = current_user.as_json(include: [{ children: {methods: [:total_balance, :dollars], include: {banks: {methods: [:balance, :type, :dollars]}}}}, rewards: {methods: :dollars, include: {child: {only: :name}}}])
       
        else

          investment_bank = current_user.banks.find_by(type: 'Investment')
          old_balance = investment_bank.balance
          total = investment_bank.calculate_interest
          @interest = total - old_balance

          investment_bank.accumulated_interest += @interest
          investment_bank.save
          @current_user = current_user.as_json(methods: :dollars, include: [{banks: {methods: [:type, :dollars, :accumulated_interest, :interest_dollars]}}, rewards: {methods: :dollars}])

        end
      else
        redirect_to login_path
      end
  end

end

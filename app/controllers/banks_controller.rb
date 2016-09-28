class BanksController < ApplicationController

	def update
		
		bank = Bank.find(params[:id])
		bank.balance = bank.balance + params[:value].to_i
		if bank.save
			bank.child.undeposited_funds = bank.child.undeposited_funds - params[:value].to_i
			bank.child.save
			
			# bank.child.banks.order('type')
			current_user = child_user.as_json(methods: :dollars, include: [{banks: {methods: [:type, :dollars, :accumulated_interest, :interest_dollars]}}, rewards: {methods: :dollars}])
			render json: current_user
		end
	end

	def transfer
		child = current_user.children.find_by(name: params[:child])

		if params[:amount].include? "."
			amount = float_to_whole(params[:amount])
		else
			amount = (params[:amount].to_i * 100)
		end



		bank = child.banks.find_by(type: params[:fromBank])
		if (bank.balance-amount) < 0
			@error = "#{bank.type} does not have enough funds"
			@children = current_user.children
			render json: {children: @children.as_json(methods: [:total_balance, :dollars], include:{ banks:{methods: [:type, :dollars]} }), error: @error.as_json }
		else
			bank.update_attribute("balance", (bank.balance - amount))
			bank2 = child.banks.find_by(type: params[:toBank])
			bank2.update_attribute("balance", (bank2.balance + amount))
			@children = current_user.children
			render json: @children.as_json(methods: [:total_balance, :dollars], include:{ banks:{methods: [:type, :dollars]} })

		end
	end

	 def withdraw

	 	if withdraw_params[:amount].include? "."
			amount = float_to_whole(withdraw_params[:amount])
		else
			amount = (withdraw_params[:amount].to_i * 100)
		end
    
    parent = current_user
    @child = parent.children.find_by(name: withdraw_params["child"])
    @bank = @child.banks.find_by(type: withdraw_params["banktype"])
    new_amount = @bank.balance -= amount
    if new_amount < 0
    	@error = "#{withdraw_params['banktype']} does not have enough funds"
    		@children = @child.parent.children
    	render json: {children: @children.as_json(methods: [:total_balance, :dollars], include:{ banks:{methods: [:type, :dollars]} }), error: @error.as_json }
    else
    @bank.update_attribute("balance", new_amount)
    @children = @child.parent.children
    render json: @children.as_json(methods: [:total_balance, :dollars], include:{ banks:{methods: [:type, :dollars]} })
  	end
  end


private 
  def withdraw_params
    params.permit(:banktype, :amount, :child)
  end


	def float_to_whole(float_string)
		if float_string.include? ","
			float_string.gsub(/[\s,]/,"")
		else
		(float_string.to_f * 100 ).round
		end
	end
end

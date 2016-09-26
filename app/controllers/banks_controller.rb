class BanksController < ApplicationController

	def update

		bank = Bank.find(params[:id])
		bank.balance = bank.balance + params[:value].to_i
		if bank.save
			bank.child.undeposited_funds = bank.child.undeposited_funds - params[:value].to_i
			bank.child.save

			current_user = child_user.as_json(include: {banks: {methods: :type}})
			render json: current_user
		end
	end

	def transfer
		child = current_user.children.find_by(name: params[:child])
		amount = params[:amount].to_i
		bank = child.banks.find_by(type: params[:fromBank])
		if (bank.balance-amount) < 0
			@error = "#{bank.type} does not have enough funds"
			@children = current_user.children
			render json: {children: @children.as_json(methods: :total_balance, include:{ banks:{methods: :type} }), error: @error.as_json }
		else
			bank.update_attribute("balance", (bank.balance - amount))
			bank2 = child.banks.find_by(type: params[:toBank])
			bank2.update_attribute("balance", (bank2.balance + amount))
			@children = current_user.children
			render json: @children.as_json(methods: :total_balance, include:{ banks:{methods: :type} })

		end
	end

	 def withdraw
    parent = current_user
    @child = parent.children.find_by(name: withdraw_params["child"])
    @bank = @child.banks.find_by(type: withdraw_params["banktype"])
    new_amount = @bank.balance -= withdraw_params["amount"].to_i
    if new_amount < 0 
    	@error = "#{withdraw_params['banktype']} does not have enough funds"
    		@children = @child.parent.children
    	render json: {children: @children.as_json(methods: :total_balance, include:{ banks:{methods: :type} }), error: @error.as_json }
    else
    @bank.update_attribute("balance", new_amount)
    @children = @child.parent.children
    render json: @children.as_json(methods: :total_balance, include:{ banks:{methods: :type} })
  	end
  end


private

	 
  def withdraw_params
    params.permit(:banktype, :amount, :child)
  end
end

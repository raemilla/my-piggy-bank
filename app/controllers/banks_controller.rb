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

end

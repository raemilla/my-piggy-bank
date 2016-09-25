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
		bank.update_attribute("balance", (bank.balance - amount))
		bank2 = child.banks.find_by(type: params[:toBank])
		bank2.update_attribute("balance", (bank2.balance + amount))
		redirect_to root_path
	end

end

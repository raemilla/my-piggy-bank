class BanksController < ApplicationController

	def update
		
		bank = Bank.find(params[:id])
		bank.balance = bank.balance + params[:value].to_i
		bank.save 

	end

end

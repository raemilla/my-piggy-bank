class Child < ApplicationRecord
  has_many :banks
  has_many :notifications
  belongs_to :parent
  has_many :rewards

  validates :name, presence: true

  has_secure_password

  def total_balance
    amount = self.banks.reduce(0) { |sum, bank| sum + bank.balance }
    "$#{'%.2f' % (amount/100.0).to_f.to_s}" 
  end

  def dollars
		"$#{'%.2f' % (self.undeposited_funds/100.0).to_f.to_s}" 
	end

end

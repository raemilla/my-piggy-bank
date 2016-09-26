class Bank < ApplicationRecord
  belongs_to :child

  validate :min_amount
  validates_numericality_of :balance, :greater_than_or_equal_to => 0


  def min_amount
  	if self.balance. < 0
   	 errors.add(:min_amount, "Limit Reached")
  	end
	end

end

class Bank < ApplicationRecord
  belongs_to :child

  validate :min_amount
  validates_numericality_of :balance, :greater_than_or_equal_to => 0

  def min_amount
    if self.balance. < 0
     errors.add(:min_amount, "Limit Reached")
    end
  end



	def dollars
		"$#{'%.2f' % (self.balance/100.0).to_f.to_s}" 
	end

  def interest_dollars
    "$#{'%.2f' % (self.accumulated_interest/100.0).to_f.to_s}" 
  end

end

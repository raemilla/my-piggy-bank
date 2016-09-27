class Reward < ApplicationRecord
  belongs_to :child 


  def dollars
		"$#{'%.2f' % (self.amount/100.0).to_f.to_s}" 
	end
end

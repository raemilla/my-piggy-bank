class Investment < Bank

	 validates :balance,:interest_rate, presence: true
end 

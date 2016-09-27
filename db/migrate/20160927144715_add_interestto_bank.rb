class AddInteresttoBank < ActiveRecord::Migration[5.0]
  def change
  	 add_column :banks, :accumulated_interest, :integer, :default => 0
  end
end

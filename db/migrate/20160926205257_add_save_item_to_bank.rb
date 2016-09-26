class AddSaveItemToBank < ActiveRecord::Migration[5.0]
  def change
  	 add_column :banks, :save_item, :string
  end
end

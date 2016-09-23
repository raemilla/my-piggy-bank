class CreateBanks < ActiveRecord::Migration[5.0]
  def change
    create_table :banks do |t|
      t.integer :balance, default: 0
      t.integer :interest_rate, default: 0
      t.date :start_date
      t.string :type
      t.references :child, null: false
      t.timestamps
    end
  end
end

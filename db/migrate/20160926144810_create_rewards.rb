class CreateRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.integer :amount, null: false
      t.string :item, null: false
      t.references :child, null: false
      
      t.timestamps
    end
  end
end

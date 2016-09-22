class CreateChildren < ActiveRecord::Migration[5.0]
  def change
    create_table :children do |t|
      t.string :name, null: false
      t.string :password_digest, null: false
      t.references :parent, null: false
      t.float :undeposited_funds, default: 0
      t.timestamps
    end
  end
end

class AddUsernameToChildren < ActiveRecord::Migration[5.0]
  def change
    add_column :children, :username, :string, unique: true
  end
end

class AddUsernameToParents < ActiveRecord::Migration[5.0]
  def change
    add_column :parents, :username, :string, unique: true
  end
end

class RemoveDetailsFromUsers < ActiveRecord::Migration
  def change
  	remove_column :users, :credit, :integer, default: 1
  	remove_column :users, :first_name, :string
  	remove_column :users, :last_name, :string
    remove_column :users, :gender, :string
    remove_column :users, :age, :integer
    remove_column :users, :shoesize, :string
  end
end

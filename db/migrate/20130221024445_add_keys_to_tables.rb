class AddKeysToTables < ActiveRecord::Migration
  def change
    add_column :vehicles, :user_id, :integer
    add_column :reservations, :user_id, :integer
  end
end

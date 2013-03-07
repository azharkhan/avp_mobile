class CreateLots < ActiveRecord::Migration
  def change
    create_table :lots do |t|
      t.string :name
      t.string :address
      t.integer :capacity
      t.decimal :price

      t.timestamps
    end
  end
end

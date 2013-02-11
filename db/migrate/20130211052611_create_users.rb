class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.integer :v_no
      t.integer :reservations

      t.timestamps
    end
  end
end

class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.string :name
      t.string :type
      t.string :plate

      t.timestamps
    end
  end
end

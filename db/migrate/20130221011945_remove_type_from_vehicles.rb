class RemoveTypeFromVehicles < ActiveRecord::Migration
  def change
    change_table :vehicles do |t|
      t.rename :type, :make
    end
  end
end

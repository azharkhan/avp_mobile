class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.datetime :timestamp

      t.timestamps
    end
  end
end

class Lot < ActiveRecord::Base
  attr_accessible :address, :capacity, :name, :price
  has_many :reservations
end

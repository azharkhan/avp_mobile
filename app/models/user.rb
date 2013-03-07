class User < ActiveRecord::Base
  attr_accessible :email, :license, :name
  has_many :vehicles
  has_many :reservations
end

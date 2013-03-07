class Reservation < ActiveRecord::Base
  attr_accessible :timestamp
  belongs_to :user
end

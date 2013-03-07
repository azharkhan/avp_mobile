class Vehicle < ActiveRecord::Base
  attr_accessible :name, :plate, :type
  belongs_to :user
end

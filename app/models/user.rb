class User < ActiveRecord::Base
  attr_accessible :reservations, :username, :v_no
end

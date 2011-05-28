class User < ActiveRecord::Base
  acts_as_authentic
  has_and_belongs_to_many :locations
  has_and_belongs_to_many :badges

  
end

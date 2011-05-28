class Badge < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_attached_file :icon, :styles => {:thumb => "100x100#" }
end

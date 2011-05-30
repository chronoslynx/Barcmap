class User < ActiveRecord::Base
  devise :database_authenticatable, :confirmable, :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  #facebook authentication
  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["user_hash"]
        user.email = data["email"]
      end
    end
  end
  def self.find_for_facebook_oauth(access_token, signed_in_resource=nil)
   data = access_token['extra']['user_hash']
   if user = User.find_by_email(data["email"])
     user
   else # Create a user with a stub password. 
     User.create!(:email => data["email"], :password => Devise.friendly_token[0,20]) 
   end
 end
  has_and_belongs_to_many :locations
  has_and_belongs_to_many :badges
  has_attached_file :avatar, :styles => {:thumb => "150x150#" }
end
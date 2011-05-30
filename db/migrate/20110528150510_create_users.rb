class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string    :login,               :default => "Username", :null => true
      t.string    :email,               :default => "Email address", :null => true
      t.string    :crypted_password,    :null => true
      t.string    :password_salt,       :null => true
      t.string    :persistence_token,   :null => false
      t.text      :about,               :default => "An new adventurer to the city of Barcelona!", :null => true 
      t.string    :avatar_file_name,    :default => "/images/anon.png", :null => true
      #Figure out how to store data on unlocked badges
      #can we do arrays? or do we have to store each badge independantly as a bit?
      #t.string    :single_access_token, :null => false                # optional, see Authlogic::Session::Params
      #t.string    :perishable_token,    :null => false                # optional, see Authlogic::Session::Perishability
      # magic fields (all optional, see Authlogic::Session::MagicColumns)
      #t.integer   :login_count,         :null => false, :default => 0
      #t.integer   :failed_login_count,  :null => false, :default => 0
      #t.datetime  :last_request_at
      #t.datetime  :current_login_at
      #t.datetime  :last_login_at
      #t.string    :current_login_ip
      #t.string    :last_login_ip
      t.timestamps
    end
    add_index :users, ["login"], :name => "index_users_on_login", :unique => true
    add_index :users, ["email"], :name => "index_users_on_email", :unique => true
    add_index :users, ["persistence_token"], :name => "index_users_on_persistence_token", :unique => true
  end

  def self.down
    drop_table :users
  end
end

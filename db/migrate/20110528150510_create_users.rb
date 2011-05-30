class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      ### Devise
      t.database_authenticatable
      t.confirmable
      t.recoverable
      t.rememberable
      t.trackable
      t.timestamps
      ### Authlogic
      #t.string    :login,               :default => "Username", :null => false
      #t.string    :email,               :default => "Email address", :null => false
      #t.string    :crypted_password,    :null => false
      #t.string    :password_salt,       :null => false
      #t.string    :persistence_token,   :null => false
      #t.text      :about,               :default => "An new adventurer to the city of Barcelona!", :null => false 
      #t.timestamps
    end

    #add_index :users, ["login"], :name => "index_users_on_login", :unique => true
    #add_index :users, ["email"], :name => "index_users_on_email", :unique => true
    #add_index :users, ["persistence_token"], :name => "index_users_on_persistence_token", :unique => true
    #add_index :users, :active_token_id

  end

  def self.down
    drop_table :users
  end
end

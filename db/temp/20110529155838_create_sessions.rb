class CreateSessions < ActiveRecord::Migration
  def self.up
    create_table :sessions do |t|
      #can be removed if app stops working
      t.string :session_id, :null => false
      t.text :data
      t.timestamps
    end

    add_index :sessions, :session_id
    add_index :sessions, :updated_at
  end

  def self.down
    drop_table :sessions
  end
end

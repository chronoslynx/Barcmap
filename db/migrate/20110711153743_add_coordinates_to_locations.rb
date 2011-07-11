class AddCoordinatesToLocations < ActiveRecord::Migration
  def self.up
  	add_column :locations, :xlocked, :integer
  	add_column :locations, :ylocked, :integer
  	add_column :locations, :xunlocked, :integer
  	add_column :locations, :yunlocked, :integer
  end

  def self.down
	remove_column :locations, :xlocked
  	remove_column :locations, :ylocked
  	remove_column :locations, :xunlocked
  	remove_column :locations, :yunlocked
  end
end

class AddImageWidthHeightToLocations < ActiveRecord::Migration
  def self.up
  	add_column :locations, :unlockedWidth, :integer
  	add_column :locations, :unlockedHeight, :integer
  end

  def self.down
  	remove_column :locations, :unlockedWidth
  	remove_column :locations, :unlockedHeight
  end
end

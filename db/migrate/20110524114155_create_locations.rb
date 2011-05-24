class CreateLocations < ActiveRecord::Migration
  def self.up
    create_table :locations do |t|
      t.string :name
      t.string :mapurl
      t.text :description
      t.text :tips
      t.text :nearby
      t.string :uid

      t.timestamps
    end
  end

  def self.down
    drop_table :locations
  end
end

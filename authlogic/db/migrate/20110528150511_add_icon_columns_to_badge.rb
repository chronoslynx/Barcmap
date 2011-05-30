class AddIconColumnsToBadge < ActiveRecord::Migration
  def self.up
    add_column :badges, :avatar_file_name,    :string
  end

  def self.down
    remove_column :badges, :avatar_file_name
  end
end

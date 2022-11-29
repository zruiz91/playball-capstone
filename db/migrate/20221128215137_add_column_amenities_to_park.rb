class AddColumnAmenitiesToPark < ActiveRecord::Migration[6.1]
  def change
    add_column :parks, :amenities, :text, array: true, default: []
  end
end

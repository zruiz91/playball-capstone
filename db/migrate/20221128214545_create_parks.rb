class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :name
      t.string :address
      t.string :hours
      t.string :image

      t.timestamps
    end
  end
end

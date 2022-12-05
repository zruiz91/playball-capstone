class AddColumnRsvpToEvent < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :rsvp, :integer, default: 0, null: false
  end
end

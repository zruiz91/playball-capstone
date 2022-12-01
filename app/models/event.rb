class Event < ApplicationRecord
  validates_presence_of :name, :info, :park, :user
  # validates :name, length:{in: 3..25}

  belongs_to :park
  belongs_to :user
end

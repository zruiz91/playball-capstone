class Park < ApplicationRecord
    validates :name, presence: true
    validates :amenities, presence: true
    validates :address, presence: true, uniqueness: true

    has_many :events
    has_many :users, through: :events

end

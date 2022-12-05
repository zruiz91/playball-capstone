class User < ApplicationRecord
    validates_presence_of :name
    validates :name, uniqueness: true, length:{in: 3..25}
    # validates :email, uniqueness: true

    has_many :events
    has_many :parks, through: :events

    has_secure_password
end

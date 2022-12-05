class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :info, :rsvp
  belongs_to :park
  belongs_to :user
end

class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :info
  belongs_to :park
  belongs_to :user
end

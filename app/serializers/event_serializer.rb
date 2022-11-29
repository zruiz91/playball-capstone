class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :info
  has_one :park
  has_one :user
end

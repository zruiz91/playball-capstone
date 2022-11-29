class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :hours, :image, :amenities
  has_many :events
end

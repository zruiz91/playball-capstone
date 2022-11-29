class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :hours, :image
end

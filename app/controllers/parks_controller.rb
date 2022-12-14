class ParksController < ApplicationController

    def index
        render json: Park.all, status: :ok
    end

    def show
        render json: Park.find(params[:id]), status: :ok
    end

    def create
        park = Park.create!(park_params)
        render json: park, status: :created
    end

    def update
        park = Park.find(params[:id])
        park.update(park_params)
        render json: park, status: :accepted
    end

    def destroy
        park = Park.find(params[:id])
        park.destroy
        head :no_content
    end


    private

    def park_params
        params.permit(:id, :name, :address, :hours, :image, :amenities)
    end

end

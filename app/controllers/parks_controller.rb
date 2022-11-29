class ParksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Park.all, status: :ok
    end

    def show
        render json: Park.find(params[:id]), status: :ok
    end

    def created
        park = Park.create!(park_params)
        render json: park, status: :created
    end

    def update
        park = Park.find(params[:id])
        park.update(user_params)
        render json: park, status: :accepted
    end

    def destroy
        park = Park.find(params[:id])
        park.destroy
        head :no_content
    end


    private

    def park_params
        params.permit(:name, :address, :hours, :image, :amenities)
    end

    def render_unprocessable_entity
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end

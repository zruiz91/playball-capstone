class ParksController < ApplicationController
    def index
        render json: Park.all, status: :ok
    end

    def show
        render json: Park.find(params[:id]), status: :ok
    end
end

class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Event.all, status: :ok
    end

    def show
        render json: Event.find(params[:id]), status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update(user_params)
        render json: event, status: :accepted
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end


    private

    def event_params
        # unsure if the park_id and user_d should just be park and user
        params.permit(:name, :info, :park_id, :user_id)
    end

    def render_unprocessable_entity
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end



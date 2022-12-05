class EventsController < ApplicationController

    def index
        render json: Event.all, status: :ok
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    def create
        # byebug
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event, status: :accepted
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end


    private

    def event_params
        params.permit(:id, :name, :info, :park_id, :user_id, :rsvp)
    end

end



class SessionsController < ApplicationController
    def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors:"Invalid Password or Username"}
        end
    end
end

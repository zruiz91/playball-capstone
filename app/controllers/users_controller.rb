class UsersController < ApplicationController

    def show
        user = User.find(parameters[:id])
        render json: user, status: :ok
    end

    def created
        user = User.create!(user_params)
        render json: user, status: :created
    end

    # def update
    #     user = User.find(params[:id])
    #     user.update(user_params)
    #     render json: user, status: :accepted
    # end

    # def destroy
    #     user = User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
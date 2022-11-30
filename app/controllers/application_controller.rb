class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

  private

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
end

Rails.application.routes.draw do

  resources :events, only: [ :index, :show, :create, :update, :destroy]
  resources :users, except: [:index]
  resources :parks, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/hello", to: "application#hello_world"

  post "/login", to: "sessions#create"
end

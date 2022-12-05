Rails.application.routes.draw do

  resources :events, only: [ :index, :show, :create, :update, :destroy]
  resources :users
  resources :parks, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
end

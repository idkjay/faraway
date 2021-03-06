Rails.application.routes.draw do
  root "static_pages#index"

  get "/planners", to: "static_pages#index"
  get "/flights_search", to: "static_pages#index"

  devise_for :users

  devise_scope :user do
    get "/users/sign_out" => "devise/sessions#destroy"
  end

  namespace :api do
    namespace :v1 do
      resources :planners, only: [:index, :create, :destroy, :update]
      post "/flights_search", to: "flights#search"
      resources :flights, only: [:index]
    end
  end
end

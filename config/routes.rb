Rails.application.routes.draw do
  # root 'welcome#index'
  root 'static_pages#index'

  get '/', to: 'static_pages#index'
  get '/planners', to: 'static_pages#index'

  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  namespace :api do
    namespace :v1 do
      resources :planners, only: [:index, :create, :destroy, :update]
    end
  end
end

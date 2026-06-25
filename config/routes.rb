Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [ :index, :show ]
      resources :users,    only: [ :create ]
      resources :orders,   only: [ :create ]
    end
  end

  # Health check
  get "/up", to: proc { [ 200, {}, [ "OK" ] ] }
end

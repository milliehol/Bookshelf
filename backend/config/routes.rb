
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :update, :destroy]
      resources :authors, only: [:index, :update, :post]
    end
  end
end

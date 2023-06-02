Rails.application.routes.draw do
  root to: 'posts#index'
  resources :posts
  resources :prefectures, only: [] do
    resources :cities, only: :index
  end
end

Rails.application.routes.draw do
  root :to => "visitors#new"
  devise_for :users
  get 'users', to: 'visitors#new'
  resources :users
  resources :visitors

  get 'salt', to: 'users#index'

end

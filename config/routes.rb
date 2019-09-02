Rails.application.routes.draw do
  get '/tiers', to: 'tiers#index'
  resources :players
end

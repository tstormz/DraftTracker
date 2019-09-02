Rails.application.routes.draw do
  get '/tiers', to: 'tiers#index'
  get '/teams/:name', to: 'teams#findOne'
  resources :players
end

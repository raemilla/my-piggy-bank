Rails.application.routes.draw do

resources :shawntests
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'sessions#new'

resources :pages, only: [:index]
resources :parents
resources :children
get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
get '/logout' => 'sessions#destroy'

get '/tests' => 'rachtests#index'

end

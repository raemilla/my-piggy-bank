Rails.application.routes.draw do

	resources :shawntests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/tests' => 'tests#index'


root to: 'sessions#new'

resources :pages, only: [:index]
resources :parents
resources :children
get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
get '/logout' => 'sessions#destroy'

end

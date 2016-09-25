Rails.application.routes.draw do

# resources :shawntests
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: 'pages#index'

post '/transfer' => 'parents#transfer'
post '/banks/transfer' => 'banks#transfer' 
resources :pages, only: [:index]
resources :parents
resources :children
resources :banks

get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
get '/logout' => 'sessions#destroy'
resources :notifications
end

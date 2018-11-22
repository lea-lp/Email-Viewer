Rails.application.routes.draw do
  devise_for :users
  root to: "emails#index"
  get '/emails/:id', to: "emails#show", as: 'email'
  delete '/emails/:id', to: "emails#destroy", as: 'email_delete' 
  resources :tasks, except: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

OmniauthDeviseExample::Application.routes.draw do
  resources :sharings
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", :registrations => 'registrations'}
  
  root :to => "sharings#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'

  match '/explorer/:id', :controller => 'profiles', :action => 'show', :as => 'profile', :via => :get
end

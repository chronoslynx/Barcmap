OmniauthDeviseExample::Application.routes.draw do
  resources :sharings, :map, :badges, :locations
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", :registrations => 'registrations'}
  
  root :to => "home#index"
  match '/about' => "home#about"
  match '/contact' => "home#contact"
  match '/addLoc/:id', :controller => 'profiles', :action => 'addLoc', :via => :get
  match '/addBadge/:id', :controller => 'profiles', :action => 'addBadge', :via => :get
  match '/explorer/:id', :controller => 'profiles', :action => 'show', :as => 'profile', :via => :get
  
  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'

end

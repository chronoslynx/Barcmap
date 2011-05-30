class AuthorizationsController < ApplicationController
  before_filter :require_user, :only => [:destroy]
  def create
    auth = request.env['omniauth.auth']#Authorization.find_from_hash(omniauth)
    if current_user
      flash[:notice] = "Successfully added #{auth['provider']} authentication"
      current_user.authorizations.create(:providerauth['provider'], :uid => auth['uid']) #Add an auth to existing user
    elsif auth
      flash[:notice] = "Welcome back #{auth['provider']} user"
      UserSession.create(auth, true) #User is present. Login the user with his social account
    else
      @new_auth = Authorization.create_from_hash(auth, current_user) #Create a new user
      flash[:notice] = "Welcome #{auth['provider']} user. Your account has been created."
      UserSession.create(@new_auth.user, true) #Log the authorizing user in.
    end
    redirect_to root_url
  end
  
  def failure
    flash[:notice] = "Sorry, You didn't authorize"
    redirect_to root_url
  end
  
  def destroy
    @authorization = current_user.authorizations.find(params[:id])
    @authorization.destroy
    flash[:notice] = "Successfully deleted #{@authorization.provider} authentication."
    redirect_to root_url
  end
end
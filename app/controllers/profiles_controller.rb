class ProfilesController < ApplicationController
  def show
    @user = User.find_by_slug(params[:id])

    if @user.nil?
      redirect_to '/'
    end    
  end
  
  def addLoc
      @loc = Location.find(params[:id])
      @user = current_user
      if not @user.locations.exists?(:id => params[:id])
        @user.locations << @loc
      else
        redirect_to '/'
      end
  end
  
  def addBadge
    @badge = Badge.find(params[:id])
    @user = current_user
    if not @user.badges.exists?(:id => params[:id])
      @user.badges << @badge
    else
      redirect_to '/'
    end
  end
end

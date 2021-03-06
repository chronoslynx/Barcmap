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
        if @loc.name == "La Sagrada Familia"
          @unlocked_badge = true
          @unlocked_badge_url = "/addBadge/2"
        end
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

  before_filter :authenticate_user!
  def destroy
    @user = current_user
    @user.destroy
    redirect_to '/'
  end
end

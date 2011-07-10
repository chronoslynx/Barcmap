class MapController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    #@locations = Location.all
    @numLocs = Location.count
    @locids = []
    current_user.locations.each do |loc|
      @locids << loc.id
    end
  end
  
  def intro
    #@locations = Location.all
  end

end

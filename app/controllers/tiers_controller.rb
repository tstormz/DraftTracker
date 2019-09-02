class TiersController < ApplicationController
  def index
    @tiers = []
    t = 1
    tiers = Player.where(:tier => t)
    while !tiers.empty?
      @tiers << tiers
      t += 1
      tiers = Player.where(:tier => t)
    end
    render :json => @tiers
  end
end
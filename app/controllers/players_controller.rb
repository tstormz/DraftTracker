class PlayersController < ApplicationController
	def index
		@players = Player.all
		render :json => @players
	end

	def create
		player = params.require(:player).permit(:tier, :name, :position, :team, :bye)
		Player.create!(player)
	end
end

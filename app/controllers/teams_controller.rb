class TeamsController < ApplicationController
	def findOne
		name = request.path_parameters[:name]
		@team = Team.where(name: name).first
		render :json => @team
	end
end

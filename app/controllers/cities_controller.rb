class CitiesController < ApplicationController
  def index
    @prefecture = Prefecture.find(params[:prefecture_id])
    @cities = @prefecture.cities

    respond_to do |format|
      format.json { render json: @cities }
    end
  end
end

class Api::V1::FlightsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index

    dateFrom = Date.parse(params[:date_from]).strftime("%d/%m/%Y")
    dateTo = Date.parse(params[:date_to]).strftime("%d/%m/%Y")

    flyFrom_params = params[:flyFrom].capitalize
    a = Airport.where(city: flyFrom_params)
    b = a[0].code

    to_params = params[:to].capitalize
    c = Airport.where(city: to_params)
    d = c[0].code

    url = "https://api.skypicker.com/flights?flyFrom=#{b}&to=#{d}&date_from=#{dateFrom}&date_to=#{dateTo}&sort=price&partner=picky&limit=3"
    response = HTTParty.get(url)
    parsed = JSON.parse(response.body)

    render json: parsed
  end
end

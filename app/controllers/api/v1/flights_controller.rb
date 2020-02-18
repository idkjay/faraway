class Api::V1::FlightsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index

    # placeOriginSearch
    # placeDestinationSearch
    # startDate.strftime(%d/%m/%Y)
    # endDate
    # dateFrom = date_from.gsub("-","/")
    # dateTo = date_to.gsub("-","/")


    dateFrom = Date.parse(params[:date_from]).strftime("%d/%m/%Y")
    dateTo = Date.parse(params[:date_to]).strftime("%d/%m/%Y")
    flyFrom = params[:flyFrom]
    to = params[:to]
    binding.pry

    url = "https://api.skypicker.com/flights?flyFrom=#{flyFrom}&to=#{to}&date_from=#{dateFrom}&date_to=#{dateTo}&sort=price&partner=picky&limit=3"
    response = HTTParty.get(url)
    parsed = JSON.parse(response.body)
    binding.pry
    render json: parsed
  end
end

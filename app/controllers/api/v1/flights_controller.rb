class Api::V1::FlightsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def search
    dateFrom = Date.parse(params["search"]["dateFrom"]).strftime("%d/%m/%Y")
    dateTo = Date.parse(params["search"]["dateTo"]).strftime("%d/%m/%Y")

    flyFrom_params = params["search"]["flyFrom"].capitalize
    origin = Airport.where(city: flyFrom_params)
    origin_code = origin[0].code

    to_params = params["search"]["to"].capitalize
    destination = Airport.where(city: to_params)
    destination_code = destination[0].code

    url = "https://api.skypicker.com/flights?flyFrom=#{origin_code}&to=#{destination_code}&date_from=#{dateFrom}&date_to=#{dateTo}&price_from=1&partner=picky&limit=9&curr=USD"
    response = HTTParty.get(url)

    parsed_response = JSON.parse(response.body)["data"]

    flights_array = []
    parsed_response.each do |flight|

      destinationPicture = params["search"]["to"]
      url = "https://api.unsplash.com/photos/random?client_id=#{ENV["UNSPLASH_KEY"]}&per_page=1&query=#{flight["cityTo"]}"
      response_img = HTTParty.get(url)
      parsed = JSON.parse(response_img.body)

      flight_object = {
        originCode: flight["flyFrom"],
        originCity: flight["cityFrom"],
        originCountry: flight["countryFrom"]["code"],

        destinationCode: flight["flyTo"],
        destinationCity: flight["cityTo"],
        destinationCountry: flight["countryTo"]["code"],

        price: flight["conversion"]["USD"],
        link: flight["deep_link"],
        img: parsed["urls"]["regular"]
      }

      flights_array << flight_object
    end

    if flights_array.length < 1
      render json: { error: "No available flights" }, status: :unprocessable_entity
    else
      render json: flights_array
    end
  end
end

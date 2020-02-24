class Api::V1::FlightsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def search
    dateFrom = Date.parse(params["search"]["dateFrom"]).strftime("%d/%m/%Y")
    dateTo = Date.parse(params["search"]["dateTo"]).strftime("%d/%m/%Y")

    flyFrom_params = params["search"]["flyFrom"]
    origin = Airport.where("country ILIKE ? OR state ILIKE ? OR city ILIKE ? OR name ILIKE ? OR code ILIKE ?", flyFrom_params, flyFrom_params, flyFrom_params, flyFrom_params, flyFrom_params)
    origin_code = origin[0].code

    to_params = params["search"]["to"]
    destination = Airport.where("country ILIKE ? OR state ILIKE ? OR city ILIKE ? OR name ILIKE ? OR code ILIKE ?", to_params, to_params, to_params, to_params, to_params)
    destination_code = destination[0].code

    url = "https://api.skypicker.com/flights?flyFrom=#{origin_code}&to=#{destination_code}&date_from=#{dateFrom}&date_to=#{dateTo}&price_from=1&partner=picky&limit=10&curr=USD"
    response = HTTParty.get(url)
    parsed_response = JSON.parse(response.body)["data"]

    flights_array = []

    country = parsed_response[0]["countryTo"]["code"]
    url3 = "https://restcountries.eu/rest/v2/alpha/#{country}"
    response_country = HTTParty.get(url3)
    parsed_country = JSON.parse(response_country.body)

    country_object = {
      destinationCountryName: parsed_country["name"],
      destinationCountryCapital: parsed_country["capital"],
      destinationCountryFlag: parsed_country["flag"],
      destinationCountryCurrency: parsed_country["currencies"][0]["name"],
      destinationCountryLanguage: parsed_country["languages"][0]["name"]
    }

    flights_array << country_object

    parsed_response.each do |flight|
      destinationPicture = params["search"]["to"] + " travel"
      url2 = "https://api.unsplash.com/photos/random?client_id=#{ENV["UNSPLASH_KEY"]}&per_page=1&query=#{destinationPicture}"
      response_img = HTTParty.get(url2)
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
        img: parsed["urls"]["regular"],
        source: parsed["user"]["links"]["html"] + "?utm_source=your_app_name&utm_medium=referral",
        name: parsed["user"]["name"]
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

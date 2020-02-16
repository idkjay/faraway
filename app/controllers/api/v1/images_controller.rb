class Api::V1::ImagesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def search_destination
    query = params
    url = "https://api.unsplash.com/search/photos/?client_id=#{ENV["UNSPLASH_KEY"]}&per_page=1&query=#{query}"
    response = HTTParty.get(url)
    parsed = JSON.parse(response.body)

    render json: parsed
  end
end

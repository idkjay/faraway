class Api::V1::ImagesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    binding.pry
    destination = params[:to]
    url = "https://api.unsplash.com/search/photos/?client_id=#{ENV["UNSPLASH_KEY"]}&per_page=1&query=#{destination}"
    response = HTTParty.get(url)
    parsed = JSON.parse(response.body)
    binding.pry
    render json: parsed
  end
end

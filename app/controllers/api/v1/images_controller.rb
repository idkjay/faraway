class Api::V1::ImagesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
  end
end

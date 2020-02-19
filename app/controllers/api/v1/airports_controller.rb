class AirportsController < ApplicationController
  def index
    @airports = Airport.all
  end

  if params[:term]
    @airports = Airport.search_by_full_name(params[:term])
  else
    @airports = Airport.all
  end
end

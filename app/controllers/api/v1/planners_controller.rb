class Api::V1::PlannersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    planners = current_user.planners
    render json: planners
  end

  private

  def planner_params
    params.permit(:title, :description)
  end
end

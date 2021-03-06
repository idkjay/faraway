class Api::V1::PlannersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    planners = current_user.planners
    render json: planners
  end

  def create
    if user_signed_in?
      planner = Planner.new(planner_params)
      planner.user = current_user

      if planner.save
        render json: planner
      else
        render json: planner.errors.full_messages.to_sentence
      end
    else
      redirect_to root_path
    end
  end

  def update
    planner = Planner.find(params["id"])
    if planner.update_attributes(planner_params)
      render json: current_user.planners
    else
      render json: {message: "Unsuccessful update" }
    end
  end

  def destroy
    planner = Planner.find(params["id"])
    planner.destroy
    render json: current_user.planners
  end

  private

  def planner_params
    params.permit(:title, :description)
  end
end

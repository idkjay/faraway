class StaticPagesController < ApplicationController
  before_action :authorize_user, only: [:create]

  def index
  end

  def create
  end
end

class Planner < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true

  default_scope { order(created_at: :asc) }
end

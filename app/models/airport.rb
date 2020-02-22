class Airport < ApplicationRecord
  validates :country, presence: true
  validates :state, presence: true
  validates :city, presence: true
  validates :name, presence: true
  validates :code, presence: true
end

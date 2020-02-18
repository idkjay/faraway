class Airport < ApplicationRecord
  validates :name, presence: true
  validates :code, presence: true 
end

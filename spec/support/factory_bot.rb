require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "Rob#{n}"}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end

require 'rails_helper'

RSpec.describe Api::V1::PlannersController do
  include Devise::Test::ControllerHelpers
  let!(:user1) { User.create(
    name: 'Jack',
    email: 'jack@gmail.com',
    password: '123456'
  )}

  let!(:user2) { User.create(
    name: 'Braden',
    email: 'braden@gmail.com',
    password: '123456'
  )}

  let!(:planner1) { Planner.create(
    title: 'first title',
    description: 'first description',
    user: user1
  )}

  let!(:planner2) { Planner.create(
    title: 'second title',
    description: 'second description',
    user: user1
  )}

  describe 'GET#index' do
    it 'should return a list off all the planners a user has made' do
      sign_in user1

      get :index, params: { user: user1 }
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 2
      expect(returned_json[0]['title']).to eq 'first title'
      expect(returned_json[0]['description']).to eq 'first description'
      expect(returned_json[0]['user']['id']).to eq user1.id
      expect(returned_json[1]['title']).to eq 'second title'
      expect(returned_json[1]['description']).to eq 'second description'
      expect(returned_json[1]['user']['id']).to eq user1.id
    end

    it 'should not include planners made by another user' do
      sign_in user2

      get :index, params: { user: user2 }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(returned_json.length).to eq 0
    end
  end

end

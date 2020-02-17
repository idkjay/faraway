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

  describe 'POST#create' do
    context 'when a user is signed in and provides proper planner params' do
      let!(:new_planner) {{
        title: 'new planner title',
        description: 'new planner description',
        user: user1
      }}

      it 'adds a new planner to the database' do
        sign_in user1

        previous_count = Planner.count
        post :create, params: new_planner, format: :json
        expect(Planner.count).to eq(previous_count + 1)
      end

      it 'returns the new review as JSON' do
        sign_in user1

        post :create, params: new_planner, format: :json
        response_body = JSON.parse(response.body)

        expect(response_body.length).to eq 4
        expect(response_body['title']).to eq 'new planner title'
        expect(response_body['description']).to eq 'new planner description'
      end
    end

    context 'when a user submits planners without required params' do
      let!(:bad_planner) {{
        title: '',
        description: '',
        user: user1
      }}

      it 'does not add the new planner to the database' do
        previous_count = Planner.count

        post :create, params: bad_planner, format: :json
        expect(Planner.count).to eq(previous_count)
      end
    end
  end

  describe 'DELETE#destroy' do
    context 'when a user deletes a planner' do
      it 'planner is removed from the database' do
        sign_in user1
        previous_count = Planner.count

        delete :destroy, params: { planner: planner1, id: planner1.id}, format: :json
        expect(Planner.count).to eq(previous_count - 1)
      end
    end
  end

  describe "PATCH#update" do
    context 'when a user updates a planner' do
      it "updated planner is saved to the database" do
        sign_in user1
        planner_params = {
          title: "Edited title",
          description: "Edited description",
          user_id: user1.id,
          id: planner1.id
        }

        patch :update, params: planner_params, format: :json
        updated_planner = Planner.find(planner1.id)
        expect(updated_planner.title).to eq "Edited title"
        expect(updated_planner.description).to eq "Edited description"
      end
    end
  end
end

class PlannerSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  belongs_to :user, if: :current_user?

  def current_user?
    object.user == scope
  end
end

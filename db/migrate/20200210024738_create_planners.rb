class CreatePlanners < ActiveRecord::Migration[5.2]
  def change
    create_table :planners do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end

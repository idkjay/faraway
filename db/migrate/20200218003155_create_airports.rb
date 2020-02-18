class CreateAirports < ActiveRecord::Migration[5.2]
  def change
    create_table :airports do |t|
      t.string :name, null: false
      t.string :code, null: false

      t.timestamps null: false
    end
  end
end

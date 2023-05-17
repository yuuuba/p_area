class CreateAreas < ActiveRecord::Migration[7.0]
  def change
    create_table :areas do |t|
      t.boolean :net, default: false, null: false
      t.boolean :real, default: true, null: false

      t.timestamps
    end
  end
end

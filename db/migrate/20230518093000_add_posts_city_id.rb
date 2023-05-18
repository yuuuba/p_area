class AddPostsCityId < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :city, index: true
  end
end

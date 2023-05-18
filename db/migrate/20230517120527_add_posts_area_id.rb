class AddPostsAreaId < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :area, index: true
  end
end

class PostsAddPrefectureId < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :prefecture, index: true
  end
end

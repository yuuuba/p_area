class Post < ApplicationRecord
  belongs_to :prefecture
  belongs_to :area
end
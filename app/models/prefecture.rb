class Prefecture < ApplicationRecord
  belongs_to :area
  has_many :cities

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end

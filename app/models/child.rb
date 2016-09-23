class Child < ApplicationRecord
  has_many :banks
  has_many :notifications
  belongs_to :parent

  validates :name, presence: true

  has_secure_password
end

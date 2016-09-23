class Child < ApplicationRecord
  has_many :banks
  has_many :notifications
  belongs_to :parent

  has_secure_password
end

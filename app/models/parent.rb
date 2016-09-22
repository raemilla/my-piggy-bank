class Parent < ApplicationRecord
  has_many :children
  has_many :banks, through: :children, source: :banks

  has_secure_password
end

class Parent < ApplicationRecord
  has_many :children
  has_many :banks, through: :children
  has_many :notifications, through: :children

  has_secure_password
end

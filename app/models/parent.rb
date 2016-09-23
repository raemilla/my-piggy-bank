class Parent < ApplicationRecord
  has_many :children
  has_many :banks, through: :children
  has_many :notifications, through: :children

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
 
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :name, presence: true



  has_secure_password
end

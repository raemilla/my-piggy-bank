class Child < ApplicationRecord
  has_many :banks
  has_many :notifications
  belongs_to :parent
  has_many :rewards

  validates :name, presence: true

  has_secure_password

  def total_balance
    self.banks.reduce(0) { |sum, bank| sum + bank.balance }
  end
end

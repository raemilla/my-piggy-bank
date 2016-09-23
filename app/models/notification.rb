class Notification < ApplicationRecord
  belongs_to :child

  validates :child, :text, presence: true
end

class WeddingInfo < ApplicationRecord
  belongs_to :user
  has_one_attached :groom_avatar
  has_one_attached :groom_qr
  has_one_attached :bride_avatar
  has_one_attached :bride_qr
end

class AddUserToWeddingInfos < ActiveRecord::Migration[7.2]
  def change
    add_reference :wedding_infos, :user, null: false, foreign_key: true
  end
end

class CreateWeddingInfos < ActiveRecord::Migration[7.2]
  def change
    create_table :wedding_infos do |t|
      t.string :bride_name
      t.string :bride_dad
      t.string :bride_mom
      t.string :bride_address
      t.text :bride_bio
      t.string :groom_name
      t.string :groom_dad
      t.string :groom_mom
      t.string :groom_address
      t.text :groom_bio
      t.datetime :wedding_date
      t.datetime :bride_party_date
      t.string :bride_party_address
      t.datetime :groom_party_date
      t.string :groom_party_address

      t.timestamps
    end
  end
end

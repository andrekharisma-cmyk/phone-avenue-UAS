class CreateProducts < ActiveRecord::Migration[8.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.integer :price
      t.integer :old_price
      t.string :rating
      t.string :tag
      t.string :image
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end

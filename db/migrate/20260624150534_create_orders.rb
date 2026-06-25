class CreateOrders < ActiveRecord::Migration[8.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :total_price
      t.string :status
      t.string :payment_method
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end

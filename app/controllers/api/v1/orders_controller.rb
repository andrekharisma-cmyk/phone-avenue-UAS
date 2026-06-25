module Api
  module V1
    class OrdersController < ApplicationController
      def create
        order = Order.new(order_params)
        if order.save
          render json: { message: "Pesanan berhasil", order: order }, status: :created
        else
          render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def order_params
        params.require(:order).permit(:total_price, :status, :payment_method, :address, :phone)
      end
    end
  end
end

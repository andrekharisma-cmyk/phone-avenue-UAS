module Api
  module V1
    class ProductsController < ApplicationController
      def index
        products = Product.all
        products = products.where(brand: params[:brand])    if params[:brand].present?
        products = products.where(category: params[:category]) if params[:category].present?
        render json: products
      end

      def show
        product = Product.find(params[:id])
        render json: product
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Produk tidak ditemukan" }, status: :not_found
      end
    end
  end
end
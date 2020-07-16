class Api::V1::BookshelfController < ApplicationController

  def index
    @books = Book.all
    render json: @books
  end

  def update
    @book = Book.find(params[:id])

    @book.update(book_params)
    if @book.save
      render json: @book
    else
      render json: {errors: @book.errors.full_messages}, status: 422
    end
  end

  private
  def book_params
    params.permit(:title, :author)
  end

end

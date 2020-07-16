class Api::V1::BooksController < ApplicationController

  def index
    @books = Book.all
    render json: @books
  end

  def create
    @book = Book.create(book_params)
    render json: @book
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
    params.permit(:title, :author_id, author_attributes: [:name])
  end

end

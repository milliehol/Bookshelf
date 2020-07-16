class Api::V1::AuthorsController < ApplicationController


  def index
   @authors = Author.all
   render json: @authors
 end


 private

 def author_params
   params.require(:book).permit(:name)
 end


end

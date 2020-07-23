class Api::V1::AuthorsController < ApplicationController


 def index
   @authors = Author.all
   render json: @authors
 end

 def create
   @author = Author.create(author_params)
   render json: @author
 end

 def update
   @author = Author.find_by_id(params[:id])

   if @author.update(author_params)
     render json: @author
   else
     render json: {errors: @author.errors.full_messages}, status: 422
   end
 end


 private

 def author_params
   params.permit(:name)
 end


end

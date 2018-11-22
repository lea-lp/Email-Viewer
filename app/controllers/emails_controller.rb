class EmailsController < ApplicationController
  # respond_to :html, :js
  
  def index
    @all_emails = Email.all
  end

  def show

    @email = Email.find(params[:id])
    respond_to do |format|
      format.html {root_path}
      format.js
    end 

    p "+" * 50
    p params
    p @email.id
    p "+" * 50

  end 


  def destroy
    @email = Email.find(params[:id])
    @email.destroy
    respond_to do |format|
      format.html {redirect_to root_path}
      format.js
      end 
  end


end

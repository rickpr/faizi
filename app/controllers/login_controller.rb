class LoginController < ApplicationController
  skip_before_filter :login
  def index
    @user=User.find_by_name(params[:name])
    if @user
      @password=Digest::SHA256.hexdigest("#{@user.salt}#{params[:password]}")
      if @password==@user.password
        session[:current_user]=@user.id
        redirect_to root_path
      end
    end
  end

  def logout
    session[:current_user]=nil
    redirect_to login_path
  end

end

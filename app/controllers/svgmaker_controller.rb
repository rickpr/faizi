class SvgmakerController < ApplicationController
  def host
   @ipaddr=params[:id]
  end

  def switch
    @mac=params[:id]
  end
end

class FdiskController < ApplicationController
  def index
      odl=Opendaylight::API
      @topology=odl.topology
      @flows=odl.listFlows
      @hosts=odl.hostTracker
      @statistics=odl.statistics
      @pstatistics=odl.statistics(stats: "port")
      @tstatistics=odl.statistics(stats: "table")
      @insert=Array.new
  end
  def pingFlood
  system("screen -S mininet -p 0 -X stuff \"#{params[:sourceHost]} ping #{params[:destHost]} -f -c #{params[:packetCount]}\\n\"")
  redirect_to root_path
  end
end

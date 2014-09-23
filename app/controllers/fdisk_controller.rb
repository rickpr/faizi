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
#      @floodHosts=Array.new
#      @counter = 0
#      @hosts["hostConfig"].each do |host|
#        @floodHosts[counter]="[\"#{host["networkAddress"]}\",\"#{host["networkAddress"].split(.)[-1]}\"]"
#        counter += 1
#      end
  end
  def pingFlood
  system("screen -S mininet -p 0 -X stuff \"h#{params[:sourceHost]} ping h#{params[:destHost]} -f -c #{params[:packetCount]}\\n\"")
  redirect_to root_path
  end
end

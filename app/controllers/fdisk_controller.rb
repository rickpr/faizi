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
end

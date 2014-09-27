require 'test_helper'

class SvgmakerControllerTest < ActionController::TestCase
  test "should get host" do
    get :host
    assert_response :success
  end

  test "should get switch" do
    get :switch
    assert_response :success
  end

end

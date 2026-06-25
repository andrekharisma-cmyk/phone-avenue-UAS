require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    post api_v1_users_url, params: { user: { name: "Frans", email: "frans@example.com", password_digest: "password123" } }
    assert_response :success
  end
end

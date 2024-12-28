require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "should create wedding_info after user creation" do
    user = User.create(
      email: "test@example.com",
      password: "password123",
      password_confirmation: "password123"
    )

    assert user.wedding_info.present?, "Wedding info was not created"
  end
end

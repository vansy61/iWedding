class App::BaseController < ApplicationController
    before_action :authenticate_user!
    layout "app"
end

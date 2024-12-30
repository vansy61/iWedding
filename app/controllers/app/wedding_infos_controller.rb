class App::WeddingInfosController < App::BaseController
  def show
    @wedding_info = current_user.wedding_info
  end

  def update
    wedding_info = current_user.wedding_info
    begin
      wedding_info.update!(wedding_info_params)
      flash[:notice] = "Cập nhật thành công!"
      redirect_to action: :show
    rescue
    end
  end

  private
  def wedding_info_params
    params.require(:wedding_info).permit(:groom_name, :groom_address, :groom_dad, :groom_mom, :groom_bio, :bride_name, :bride_address, :bride_dad, :bride_mom, :bride_bio, :groom_avatar, :bride_avatar, :groom_qr, :bride_qr)
  end
end

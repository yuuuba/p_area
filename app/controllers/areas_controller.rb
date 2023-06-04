class AreasController < ApplicationController
  def create
    @area = Area.new(area_params)

    if @area.save
      # 保存が成功した場合の処理
      redirect_to @area, notice: 'Area was successfully created.'
    else
      # 保存が失敗した場合の処理
      render :new
    end
  end

  private

  def area_params
    params.require(:area).permit(:net, :real)
  end
end

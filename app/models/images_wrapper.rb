class ImagesWrapper
  BASE_URL = "https://api.unsplash.com/search/photos/?client_id=#{ENV["UNSPLASH_KEY"]}"

  attr_reader :image_url

  def initialize(image_url)
    @image_url = image_url
  end

  def self.retrieve_image()
  end

end

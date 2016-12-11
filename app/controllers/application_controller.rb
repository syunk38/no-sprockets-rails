class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :script_for, :css_for

  def script_for(bundle)
    "http://localhost:3000/#{manifest_json[bundle]['js']}" if Rails.env.production?
    "http://localhost:3000/#{bundle}.js"
  end

  def css_for(bundle)
    "http://localhost:3000/#{manifest_json[bundle]['css']}" if Rails.env.production?
    "http://localhost:3000/#{bundle}.css"
  end

  private

  def manifest_json
    path = Rails.root.join('app', 'views', 'webpack-assets.json') # This is the file generated by the plug-in
    file = File.read(path)
    json = JSON.parse(file)
  end
end

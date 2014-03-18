######################################################################
# General settings.
######################################################################

# Meta.
set :meta, {
  title: 'John Quealy',
  url: 'http://urbildpunkt.com',
}

# Locations.
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :partials_dir, 'partials'

after_configuration do
  # Add bower's directory to sprockets asset path.
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

helpers do
  def is_page_active(page)
    current_page.url == page ? {:class => 'active'} : {}
  end
end

######################################################################
# Development environment.
######################################################################

configure :development do
  activate :livereload, apply_js_live: false, apply_css_live: false
end


######################################################################
# Build environment.
######################################################################

configure :build do
  activate :relative_assets
  activate :asset_hash
  activate :neat

  # Ensmallen assets
  activate :minify_html, remove_input_attributes: false
  activate :minify_css
  activate :minify_javascript
  #activate :imageoptim
end

######################################################################
# Deploy to Github.
######################################################################

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = "custom-remote" # remote name or git url, default: origin
  deploy.branch   = "master" # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  deploy.build_before = true # default: false
end

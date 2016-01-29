require File.expand_path("../../spec/dummy/config/environment.rb", __FILE__)
require_relative "../lib/ssl_reminder"
require "factory_girl_rails"
require "database_cleaner"
require "ffaker"

# Load support files
Dir["#{File.dirname(__FILE__)}/support/**/*.rb"].each { |f| require f }
Dir["#{File.dirname(__FILE__)}/factories/**/*.rb"].each { |f| require f }

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
  config.expect_with :rspec do |c|
    c.syntax = :expect
  end
end

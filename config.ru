require 'haml'
require 'sass/plugin/rack'
require './moniker'

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

run Sinatra::Application

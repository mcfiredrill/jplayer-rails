# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'jplayer/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "jplayer-rails"
  spec.version       = Jplayer::Rails::VERSION
  spec.authors       = ["Tony Miller"]
  spec.email         = ["mcfiredrill@gmail.com"]
  spec.description   = %q{jPlayer for the rails asset pipeline.}
  spec.summary       = %q{jPlayer for the rails asset pipeline}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = Dir["{lib,vendor}/**/*"] + ["LICENSE.txt", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end

tw.visual-regression-tests
==========================
Visual regression tests for thoughtworks.com

## Dependencies

1. ImageMagick  
	`brew install imagemagick`
2. Ruby  
	`rvm install <ruby-version>` replace &lt;ruby-version&gt; with version specified in [.ruby-version](.ruby-version)

## Setup

$ `bundle install`  
$ `npm install`  

## Running the tests

$ `PATH=$(npm bin):$PATH`  
$ `bundle exec wraith capture configs/capture.yaml`  

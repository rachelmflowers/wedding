## What technology that we use?
* We use Jade for templating engine
* Sass for CSS Pre-processor
* Gulp as task runner


## Getting started 
This source file based on Yeoman generator-gulp-webapp (https://github.com/yeoman/generator-gulp-webapp/). Just follow the install the instruction.
* Install dependencies: `npm install —global yo gulp bower`
* Install the generator: `npm install —global generator-gulp-webapp`
* Run `yo gulp-webapp` to scaffold your webapp

Setting your local environment 
* Install the Jade gulp plugin `npm install —save-dev gulp-jade`
* Run `bower install` to install front-end dependency from `bower.json`
* If you start with fresh install from `gulp-webapp` you need to replace all in `/app` folder, `gulp.babel.js`, `package.json` and `bower.json` from your `/source` folder.

How to start?
* Run `gulp serve` to preview and watch for changes
* Run `gulp serve:test` to run the tests in the browser
* Run `gulp` to build your webapp for production
* Run `gulp serve:dist` to preview the production build

See it live: https://github.com/lieurco/lieurshop/blob/master/README.md





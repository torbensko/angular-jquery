# jQuery Angular factory

Allows you to import jQuery like any other Angular dependency.

View [demo](http://torbensko-demos.s3.amazonaws.com/angular-jquery/demo.html).



## Install and usage

Add via bower:

    bower install torbensko/angular-jquery --save

Add the dependency:

    sko.jquery

In your service, controller or directive you can use jQuery by adding the dependency `$`.

For example:

    .controller('DemoCtrl', function ($scope, $) {
      $.getScript('URL', function() {
        // do something
      });
    });

See `demo.html` for more instructions.


## Development

Install

    npm install
    bower install

Run demo

    node demo-server.js

# jQuery Angular factory

Allows you to import jQuery like any other dependency.



## Install and usage

-   Add via bower:

        bower install torbensko/angular-jquery --save

-   Add `sko.common.jquery` as a dependency.

-   In your service, controller or directive you can use jQuery by adding the dependency `$`.

    For example:

        .controller('DemoCtrl', function ($scope, $) {
          $.getScript('http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.20/p5.js', function() {
            window.setup = function() {
              createCanvas($(window).width(), $(window).height());
              fill('rgba(0,255,0, 0.1)');
              noStroke();
            };
            window.draw = function() {
              var size = Math.random()*100;
              ellipse(Math.random()*width, Math.random()*height, size, size);
            };
          });
        });
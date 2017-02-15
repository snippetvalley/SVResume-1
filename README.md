# SVComing-Soon
SVComing Soon is free responsive, simple, clean and mobile friendly coming soon site bootstrap template. Included in the template is a countdown timer, foneawesome icons with 14 background images.


https://github.com/hilios/jQuery.countdown

http://fontawesome.io/

There is no specific reason to font awesome icons, you can use bootstrap default icons also.

http://getbootstrap.com/components/

All images are download from unsplash with CCO License (https://unsplash.com/license).

To change background image, click on ⚙ icon.



To customize, countertime, then change code in js/app.js

$('#counter-block').countdown('2018/01/01', function(event) {
        var $this = $(this).html(event.strftime(''
    /*+ '<span>%w <em>weeks </em></span> '*/
    + '<span>%D <em>days </em></span> '
    + '<span>%H <em>hrs </em></span> '
    + '<span>%M <em>mins</em></span>  '
    + '<span>%S <em>secs</em></span> '));
      });



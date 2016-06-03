/**
 * Created by schandramouli on 6/3/16.
 */

(function () {
  window.addEventListener("load", resize);

  function resize(event) {
    var links = $('.links');
    var containerWidth = parseFloat(links.css('width'));
    var halfWidth = (containerWidth) / 2 - 10;
    var resetLinks = false;

    links.children().each(function (i, item) {
      var width = parseFloat($(item).css('width'));
      // we need it to be more than half the width
      if (width > halfWidth) {
        console.log(item, " was found to be very close to half the width");
        resetLinks = true;
      }
    });

    if (resetLinks === true) {
      links.addClass('centered');
    } else {
      links.removeClass('centered');
    }
  }
}());

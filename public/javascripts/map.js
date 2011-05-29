/* DO NOT MODIFY. This file was compiled Sat, 28 May 2011 15:04:05 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  /*
      All the map image canvas logic and modal magic is in this file
      Some crazy ajax voodoo goin' on here mon'!
  */  var locClickEvent;
  locClickEvent = function(e) {
    return jQuery(function($) {
      return $.ajax({
        url: '/locations/1',
        type: 'GET',
        dataType: "html",
        success: function(data) {
          return $.modal(data, {
            onOpen: function(dialog) {
              return dialog.overlay.fadeIn('slow', function() {
                return dialog.container.slideDown('medium', function() {
                  return dialog.data.fadeIn('slow');
                });
              });
            }
          });
        }
      });
    });
  };
  window.onload = function() {
    var circle, map;
    map = Raphael(document.getElementById("map", 320, 200));
    circle = map.circle(50, 40, 20);
    circle.id = 1;
    circle.attr("fill", "#000");
    return circle.click(locClickEvent);
  };
}).call(this);

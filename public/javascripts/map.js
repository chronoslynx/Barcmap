/* DO NOT MODIFY. This file was compiled Mon, 06 Jun 2011 22:03:01 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  /*
      All the map image canvas logic and modal magic is in this file
      Some crazy ajax voodoo goin' on here mon'!
      
      TODO: Swap this to use NyroModal, or a custom popup
           FUCK simplemodal
  */  var locClickEvent;
  locClickEvent = function(e) {
    return jQuery(function($) {
      return $.ajax({
        url: '/locations/' + 1,
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
    return jQuery(function($) {
      var circle, map;
      map = Raphael(document.getElementById("map", 320, 200));
      circle = map.circle(50, 40, 20);
      circle.attr("fill", "#000");
      return circle.node.click(function(e) {
        e.preventDefault();
        $.nmManual('/locations/1');
      });
    });
  };
}).call(this);

/* DO NOT MODIFY. This file was compiled Tue, 28 Jun 2011 08:15:35 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  /*
      All the map image canvas logic and modal magic is in this file
      Some crazy ajax voodoo goin' on here mon'!
      
      Uses Jquery.Fancybox for the ajax modal popups.
      Hooray!
  */  window.onload = function() {
    return jQuery(function($) {
      var can, circle, circle2, map;
      can = Raphael(document.getElementById("map", 700, 400));
      map = can.image("/images/map.jpg", 0, 0, 700, 400);
      circle = can.circle(50, 40, 20);
      circle.attr("fill", "#000");
      circle2 = can.circle(100, 200, 40);
      circle2.attr("fill", "#fb3");
      circle.node.onclick = function(e) {
        return $.fancybox({
          'href': '/locations/1',
          'width': '400px',
          'height': '400px',
          'autoScale': false,
          'type': 'ajax',
          'transitionIn': 'fade',
          'transitionOut': 'fade'
        });
      };
      return circle2.node.onclick = function(e) {
        return $.fancybox({
          'href': '/locations/2',
          'width': '400px',
          'height': '400px',
          'autoScale': false,
          'type': 'ajax',
          'transitionIn': 'fade',
          'transitionOut': 'fade'
        });
      };
    });
  };
}).call(this);

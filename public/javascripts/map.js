/* DO NOT MODIFY. This file was compiled Mon, 27 Jun 2011 12:06:03 GMT from
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
      var circle, circle2, map;
      map = Raphael(document.getElementById("map", 320, 200));
      circle = map.circle(50, 40, 20);
      circle.attr("fill", "#000");
      circle2 = map.circle(100, 200, 40);
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

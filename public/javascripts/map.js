/* DO NOT MODIFY. This file was compiled Wed, 06 Jul 2011 17:19:53 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  /*
      All the map image canvas logic and modal magic is in this file
      Some crazy ajax voodoo goin' on here mon'!
      
      Uses Jquery.Fancybox for the ajax modal popups.
      Hooray!
  */  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  window.onload = function() {
    return jQuery(function($) {
      var arc, can, colombus, locnums, map, pcata, sagrada, setupNode, unlocked;
      setupNode = function(num) {
        return $.fancybox({
          'href': '/locations/' + num,
          'width': '400px',
          'height': '400px',
          'autoScale': false,
          'type': 'ajax',
          'transitionIn': 'fade',
          'transitionOut': 'fade'
        });
      };
      unlocked = $.parseJSON($('#map').attr('data'));
      can = Raphael(document.getElementById("map", 660, 600));
      map = can.image("/images/map/map.jpg", 0, 0, 700, 400);
      locnums = [1, 2, 3];
      arc = can.image("/images/map/lock.png", 375, 193, 68, 70);
      arc.node.onclick = function(e) {
        return $.fancybox({
          'href': '/locations/1',
          'width': "50",
          'height': '400px',
          'autoScale': false,
          'type': 'ajax',
          'transitionIn': 'fade',
          'transitionOut': 'fade'
        });
      };
      colombus = can.image("/images/map/lock.png", 250, 250, 68, 70);
      pcata = can.image("/images/map/lock.png", 280, 150, 68, 70);
      if (__indexOf.call(unlocked, 3) >= 0) {
        sagrada = can.image("/images/map/sagrada.png", 430, 0, 87, 108);
      } else {
        sagrada = can.image("/images/map/lock.png", 445, 40, 68, 70);
      }
      return sagrada.node.onclick = function(e) {
        return $.fancybox({
          'href': '/locations/3',
          'width': '400px',
          'height': '400px',
          'autoScale': false,
          'type': 'ajax',
          'transitionIn': 'fade',
          'transitionOut': 'fade'
        });
      };
      /*
              circle = can.circle 50, 40, 20
              circle.attr "fill", "#000"
              circle2 = can.circle 100, 200, 40
              circle2.attr "fill", "#fb3"
              circle.node.onclick = (e) ->
                  $.fancybox {
                      'href' : '/locations/1',
                      'width' : '400px',
                      'height' : '400px',
                      'autoScale' : false,
                      'type' : 'ajax',
                      'transitionIn' : 'fade',
                      'transitionOut' : 'fade'
                  }
              circle2.node.onclick = (e) ->
                  $.fancybox {
                      'href' : '/locations/2',
                      'width' : '400px',
                      'height' : '400px',
                      'autoScale' : false,
                      'type' : 'ajax',
                      'transitionIn' : 'fade',
                      'transitionOut' : 'fade'
                  }
              */
    });
  };
}).call(this);

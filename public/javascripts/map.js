/* DO NOT MODIFY. This file was compiled Wed, 25 May 2011 22:04:30 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  /*
      All the map image canvas logic and modal magic is in this file
      Some crazy ajax voodoo goin' on here mon'!
  */  var element_position, getNumericStyleProperty;
  getNumericStyleProperty = function(style, prop) {
    return parseInt(style.getPropertyValue(prop), 10);
  };
  element_position = function(e) {
    var borderLeft, borderTop, inner, paddingLeft, paddingTop, style, x, y;
    x = 0;
    y = 0;
    inner = true;
    while (e === e.offsetParent) {
      x += e.offsetLeft;
      y += e.offsetTop;
      style = getComputedStyle(e, null);
      borderTop = getNumericStyleProperty(style, "border-top-width");
      borderLeft = getNumericStyleProperty(style, "border-left-width");
      y += borderTop;
      x += borderLeft;
      if (inner) {
        paddingTop = getNumericStyleProperty(style, "padding-top");
        paddingLeft = getNumericStyleProperty(style, "padding-left");
        y += paddingTop;
        x += paddingLeft;
      }
      inner = false;
    }
    return {
      x: x,
      y: y
    };
  };
  window.onload = function() {
    var c, t;
    c = document.getElementById("mapcan");
    t = c.getContext("2d");
    c.addEventListener('mousemove', function(e) {
      var p;
      t.fillStyle = "white";
      t.fillRect(0, 0, c.width, c.height);
      t.fillStyle = "black";
      p = element_position(c);
      t.fillText('pageX:     ' + e.pageX, 16, 16);
      t.fillText('pageY:     ' + e.pageX, 16, 32);
      t.fillText('offset x:  ' + p.x, 16, 48);
      t.fillText('offset y:  ' + p.y, 16, 64);
      t.fillText('canvas x:  ' + (e.pageX - p.x), 16, 80);
      return t.fillText('canvas y:  ' + (e.pageY - p.y), 16, 96);
    }, false);
    return c.addEventListener('click', function(e) {
      var locnum;
      locnum = 1;
      return jQuery(function($) {
        return $.ajax({
          url: '/locations/' + locnum,
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
    }, false);
  };
}).call(this);

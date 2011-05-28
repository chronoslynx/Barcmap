/* DO NOT MODIFY. This file was compiled Sat, 28 May 2011 14:55:52 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  /*
      All the map image canvas logic and modal magic is in this file
      Some crazy ajax voodoo goin' on here mon'!
  */
  /*
  getNumericStyleProperty = (style, prop) ->
      return parseInt(style.getPropertyValue(prop),10)
      
  element_position = (e) ->
      x = 0 
      y = 0
      inner = true
      #do {
      while e is e.offsetParent
          x += e.offsetLeft
          y += e.offsetTop
          style = getComputedStyle e,null
          borderTop = getNumericStyleProperty style,"border-top-width"
          borderLeft = getNumericStyleProperty style,"border-left-width"
          y += borderTop
          x += borderLeft
          if inner
            paddingTop = getNumericStyleProperty style,"padding-top"
            paddingLeft = getNumericStyleProperty style,"padding-left"
            y += paddingTop
            x += paddingLeft
          inner = false
      #}while (e == e.offsetParent)
      return { x: x, y: y }
  */  var circEvent, locClickEvent;
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
  circEvent = function(e) {
    return alert("Circle clicked!");
  };
  window.onload = function() {
    var circle, map;
    map = Raphael(document.getElementById("map", 320, 200));
    circle = map.circle(50, 40, 20);
    circle.id = 1;
    circle.attr("fill", "#000");
    return circle.click(locClickEvent);
    /*
        c = document.getElementById "mapcan"
        t = c.getContext "2d"
        #t.drawImage(document.getElementById("map"), 0, 0)
        c.addEventListener 'mousemove', (e) ->
            t.fillStyle = "white"
            t.fillRect 0, 0, c.width, c.height
            t.fillStyle = "black"
            p = element_position c
            t.fillText 'pageX:     ' + e.pageX, 16, 16
            t.fillText 'pageY:     ' + e.pageX, 16, 32
            t.fillText 'offset x:  ' + p.x, 16, 48
            t.fillText 'offset y:  ' + p.y, 16, 64
            t.fillText 'canvas x:  ' + (e.pageX - p.x), 16, 80
            t.fillText 'canvas y:  ' + (e.pageY - p.y), 16, 96
        , false
        c.addEventListener 'click', (e) ->
            #map click logging and rendering goes here
            #need to get locnum based on pixel location in canvas
            locnum = 1
            jQuery ($) ->
                $.ajax {
                    url: '/locations/'+locnum,
                    type: 'GET',
                    #data: locnum,
                    dataType: "html",
                    success: (data) ->
                        $.modal data, {onOpen: (dialog) ->
                        	dialog.overlay.fadeIn 'slow', () ->
                        		dialog.container.slideDown 'medium', () ->
                        			dialog.data.fadeIn 'slow'
                        	    
                            
                        }
                }
                      
        , false
        */
  };
}).call(this);

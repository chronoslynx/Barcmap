/* DO NOT MODIFY. This file was compiled Tue, 24 May 2011 16:48:47 GMT from
 * /Users/chronon/Dropbox/Class/Summer2011/CS 3750/project/barcmap/app/coffeescripts/map.coffee
 */

(function() {
  var c, t;
  c = document.getElementById("mapcan");
  t = c.getContext("2d");
  t.drawImage($(document).getElementById("map", 0, 0));
  c.addEventListener('mousemove', function(e) {
    t.fillStyle = "white";
    t.fillRect(0, 0, c.width, c.height);
    return t.fillStyle = "black";
  });
}).call(this);

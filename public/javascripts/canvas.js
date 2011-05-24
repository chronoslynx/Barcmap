window.onload = function(){
    var c = document.getElementById("mapcan");
    var t = c.getContext("2d");
    //t.drawImage(document.getElementById("map"), 0, 0);
    c.addEventListener('mousemove', function(e) {
        t.fillStyle = "white"
        t.fillRect(0, 0, c.width, c.height);
        t.fillStyle = "black"
        var p = element_position(c);
        t.fillText('pageX:     ' + e.pageX, 16, 16);
        t.fillText('pageY:     ' + e.pageX, 16, 32);
        t.fillText('offset x:  ' + p.x, 16, 48);
        t.fillText('offset y:  ' + p.y, 16, 64);
        t.fillText('canvas x:  ' + (e.pageX - p.x), 16, 80);
        t.fillText('canvas y:  ' + (e.pageY - p.y), 16, 96);
    }, false);
}

function getNumericStyleProperty(style, prop){
    return parseInt(style.getPropertyValue(prop),10) ;
}

function element_position(e) {
    var x = 0, y = 0;
    var inner = true ;
    do {
        x += e.offsetLeft;
        y += e.offsetTop;
        var style = getComputedStyle(e,null) ;
        var borderTop = getNumericStyleProperty(style,"border-top-width") ;
        var borderLeft = getNumericStyleProperty(style,"border-left-width") ;
        y += borderTop ;
        x += borderLeft ;
        if (inner){
          var paddingTop = getNumericStyleProperty(style,"padding-top") ;
          var paddingLeft = getNumericStyleProperty(style,"padding-left") ;
          y += paddingTop ;
          x += paddingLeft ;
        }
        inner = false ;
    } while (e = e.offsetParent);
    return { x: x, y: y };
}
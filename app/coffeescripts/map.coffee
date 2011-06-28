###
    All the map image canvas logic and modal magic is in this file
    Some crazy ajax voodoo goin' on here mon'!
    
    Uses Jquery.Fancybox for the ajax modal popups.
    Hooray!
###    
window.onload = () ->
    jQuery ($) ->
        # this gets the user object from ruby to javascript
        #ids = $.parseJSON( $('#map').attr('data') )
        #Using raphaeljs drawing library:
        can = Raphael document.getElementById "map", 700, 400
        #setup(id, "50", "40") for id in ids
        map = can.image("/images/map.jpg", 0, 0, 700, 400)
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
        
###
    All the map image canvas logic and modal magic is in this file
    Some crazy ajax voodoo goin' on here mon'!
    
    Uses Jquery.Fancybox for the ajax modal popups.
    Hooray!
###    
window.onload = () ->
    jQuery ($) ->
        setupNode = (num) ->
            $.fancybox {
                'href' : '/locations/' + num,
                'width' : '400px',
                'height' : '400px',
                'autoScale' : false,
                'type' : 'ajax',
                'transitionIn' : 'fade',
                'transitionOut' : 'fade'
            }
        # this gets the user object from ruby to javascript
        unlocked = $.parseJSON( $('#map').attr('data') )
        #alert num for num in ids
        #Using raphaeljs drawing library:
        can = Raphael document.getElementById "map", 660, 600
        #setup(id, "50", "40") for id in ids
        map = can.image "/images/map/map.jpg", 0, 0, 700, 400
        locnums = [1..3]
        #for num in locnums
        #    if id not in unlocked
                
        arc = can.image "/images/map/lock.png", 375, 193, 68, 70
        arc.node.onclick = (e) ->
            $.fancybox {
                'href' : '/locations/1',
                'width' : "50",
                'height' : '400px',
                'autoScale' : false,
                'type' : 'ajax',
                'transitionIn' : 'fade',
                'transitionOut' : 'fade'
            }
        colombus = can.image "/images/map/lock.png", 250, 250, 68, 70 
        pcata = can.image "/images/map/lock.png", 280, 150, 68, 70 
        if 3 in unlocked
            sagrada = can.image "/images/map/sagrada.png", 430, 0, 87, 108
        else
            sagrada = can.image "/images/map/lock.png", 445, 40, 68, 70
        sagrada.node.onclick = (e) ->
            $.fancybox {
                'href' : '/locations/3',
                'width' : '400px',
                'height' : '400px',
                'autoScale' : false,
                'type' : 'ajax',
                'transitionIn' : 'fade',
                'transitionOut' : 'fade'
            }
        
        ###
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
        ###
        
        
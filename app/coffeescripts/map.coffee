###
    All the map image canvas logic and modal magic is in this file
    Some crazy ajax voodoo goin' on here mon'!
###
locClickEvent = (e) ->
    jQuery ($) ->
        $.ajax {
            url: '/locations/1',
            type: 'GET',
            dataType: "html",
            success: (data) ->
                $.modal data, {onOpen: (dialog) ->
                	dialog.overlay.fadeIn 'slow', () ->
                		dialog.container.slideDown 'medium', () ->
                			dialog.data.fadeIn 'slow'         
                }
        } 
window.onload = () ->
    #Using raphaeljs drawing library:
    map = Raphael document.getElementById "map", 320, 200
    circle = map.circle 50, 40, 20
    circle.id = 1
    circle.attr "fill", "#000"
    circle.click locClickEvent




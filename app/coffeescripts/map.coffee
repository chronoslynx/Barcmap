c = document.getElementById "mapcan"
t = c.getContext "2d"
t.drawImage $(document).getElementById "map" , 0, 0
c.addEventListener 'mousemove', (e) ->
    t.fillStyle = "white"
    t.fillRect 0, 0, c.width, c.height
    t.fillStyle = "black"

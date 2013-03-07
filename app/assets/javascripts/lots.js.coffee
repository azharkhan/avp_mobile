# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.#com/coffee-script/

$ ->
    yourStartLatLng = new google.maps.LatLng(43.466667, -80.533333)
    $("#map_canvas").gmap center: yourStartLatLng
    $("#map_canvas").gmap "option", "zoom", 12

/**
 * Main.js
 */

var mymap;
var marker;

function initMapBox(){
    mymap = L.map("mapid").setView([-37.8136, 144.9631], 13);
    marker = L.marker([-37.8136, 144.9631]).addTo(mymap);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmVsaWVudG0iLCJhIjoiY2tocTlrOHdnMDRmcTJ6bXVnYjkxYWQzbyJ9.TBPKUtsYTZ0DcwWnG5iBeQ",
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mymap);
}

$(document).ready(function () {
    initMapBox();
    $('.sidenav').sidenav();
    
});
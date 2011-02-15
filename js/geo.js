function geostart(){
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(drawMap);
}
}


function drawMap(position){
var lat =  position.coords.latitude;
var lng = position.coords.longitude;
console.log("Your location is: " + lat+ ", "  + lng);
$('section[id="geolocation"').append("Your location is lat: " + lat + " long: " + lng);

var latlang = new google.maps.LatLng(lat, lng);

var options={
  zoom: 8,
  center:latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};


var map = new google.maps.Map(document.getElementById("map_canvas"), options);
console(map);
}

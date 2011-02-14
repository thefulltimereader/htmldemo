function geostart(){
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(drawMap);
}
}


function drawMap(position){
//alert("Your location is: " + position.coords.longitude+ ", "  + position.coords.latitude);
var latlan = new google.maps.LatLng(
			 position.coords.latitude, position.coords.longitude);
	 var marker = new google.maps.Marker({position:latlan, map:map});
	map.setCenter(latlan);
}
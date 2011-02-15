function geostart(){
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(drawMap);
  console.log("ask?");
}
}


function drawMap(position){
var lat =  position.coords.latitude;
var lng = position.coords.longitude;
  console.log("ask?");
console.log("Your location is: " + lat+ ", "  + lng);

var latlang = new google.maps.LatLng(lat, lng);

var options={
  zoom: 8,
  center:latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};


var map = new google.maps.Map($('#map_canvas'), options);

}

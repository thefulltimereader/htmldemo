if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(function(position){
 var latlan = new google.maps.LatLng(
 position.coords.latitude, position.coords.longitude);
var marker = new google.maps.Marker({position:latlan, map:map});
map.setCenter(latlan);
}, errorHandler);
}

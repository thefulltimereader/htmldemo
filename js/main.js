
function startAll(){

resume();
resizePanel()

geostart();

draw();
$(window).resize(function(){
		   resizePanel();
		 });
}

function resizePanel(){
  width=$(window).width();
  height = $(window).height();
  mask_width = width * $('section').length;
  $('#window, section').css({width: width, height:height}); 
}



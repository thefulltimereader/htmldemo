maxPage = 4;
function startAll(){
currentPage = 1;
resume();
resizePanel()

geostart();


$(window).resize(function(){
resizePanel();
});
}

function resizePanel(){
  width=$(window).width();
  height = $(window).height();
  
  mask_width = width * $('section').length;
//  alert("resize to:" + width + " h: " + height);
  $('#window, section').css({width: width, height:height}); 
  //$('#mask').css({width:mask_width, height:height});
  
//  $('#window').scrollTo($('section.selected').attr('href'), 0);
			      
}

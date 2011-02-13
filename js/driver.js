function startAll(){
resume();
scrolling();
$(window).resize(function){
resizePanel();
});
}

function resizePanel(){
  width=$(window).width();
  height = $(window).height();
  
  mask_width = width * $('section').length;
  
  $('#window, section').css({width: width, height:height});
  $('#mask').css({width:mask_width, height:height});
  
//  $('#window').scrollTo($('section.selected').attr('href'), 0);
			      
}

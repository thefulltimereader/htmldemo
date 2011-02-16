maxPage = 5;
currentPage = 1;
$(document.documentElement).keyup(function(event){
	switch(event.keyCode){
		case 40: //down
		  dir = 1;
		break;
		case 38: // up
		  dir = -1;
		break;
		default: dir= 0;
	}
	if(dir!=0){
	curr = updateCurrent(dir);
	$(curr).addClass('current');
	$('#window').scrollTo(curr, 800);
	}
});
//where dir={-1(up), 1(down), +2(left), -2(right)}
function updateCurrent(dir){
	$('section[name^='+currentPage+']').removeClass('current');
	   (currentPage > maxPage)? currentPage = 1: (currentPage < 1)? currentPage = maxPage: currentPage = currentPage + dir;
        saveLocation(currentPage);
	   return 'section[name^='+currentPage+']';
}
//jumps to the specified page, only called in the beginning
function setPage(page){
  currentPage = page;
  curr = 'section[name^='+page+']';
   $('#window').scrollTo('section[name^='+page+']', 800);
}

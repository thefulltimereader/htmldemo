$(document.documentElement).keyup(function(event){
	switch(event.keyCode){
		case 40: //down
		  dir = 1;
		break;
		case 38: // up
		  dir = -1;
		break;
/*		case 37: //left
		  dir = -2;
		break;
		default: dir = 2;//right*/
		default: dir= 0;
	}
	if(dir==0) return;
	curr = updateCurrent(dir);
	$(curr).addClass('current');
	$('#window').scrollTo(curr, 800);
});
//where dir={-1(up), 1(down), +2(left), -2(right)}
function updateCurrent(dir){
	$('section[name^='+currentPage+']').removeClass('current');
	   (currentPage > maxPage)? currentPage = 1: (currentPage < 1)? currentPage = maxPage: currentPage = currentPage + dir;
	   return 'section[name^='+currentPage+']';
}
function setPage(){
}
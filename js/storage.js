/**
 * Checks if this site has been visited by this browser before
 * Also checks if so, the place where they left off.
 */	 
function resume(){
	if (!supports_html5_storage()){
		return false;
	}
	updateVisited();
	
	lastPage = parseInt(localStorage.getItem("pageNumber"));
	
	if(lastPage ==null){
		alert("last page not working!");
		return false;
	}
	
	setPage(lastPage);
	return true;
}

function supports_html5_storage(){
	try{
		return 'localStorage' in window && window['localStorage'] !== null;
	}catch(e){
		return false;
	}
}

function saveLocation(){
	if (!supports_html5_storage()){return false;}
	localStorage.setItem("pageNumber",pagenumber);
	return true;
}
function updateVisited(){
	if (!supports_html5_storage()){return false;}
	try{
	 visited = (localStorage.getItem("visited"));
	 if(visited!=null){
		 visited = parseInt(visited);
		 localStorage.setItem("visited", visited++);
//		 alert("visited updated to: " + visited);
	 }
	 else{
		 localStorage.setItem("visited", 1);
	 }
	} catch (e) {
		console.log(e);		 //e==QUOTA_EXCEEDED_ERR, write to console
		alert("Wow you visited me alot.");
	}
	return true;
}

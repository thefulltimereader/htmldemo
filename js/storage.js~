/**
 * Checks if this site has been visited by this browser before
 * Also checks if so, the place where they left off.
 */	 
function resume(){
	if (!supports_html5_storage()) return false;
	updateVisited();
	lastPage = parseInt(localStorage.getItem("lastPage"));
	if(lastPage ==null) lastPage = 1;
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

function saveLocation(cpage){
	if (!supports_html5_storage()){return false;}
	localStorage.setItem("lastPage",page);
	return true;
}
function updateVisited(){
	try{
	 visited = (localStorage.getItem("visited"));
	 if(visited!=null){
		 visited = parseInt(visited);
	         $("section[id=\'localStorage\'] h2").html("This is your " + visited+" visit.");
		 localStorage.setItem("visited", visited++);
	         console.log("visited updated to: " + visited);
	 }
	 else{
		 localStorage.setItem("visited", 1);
	         $(section[id="localStorage"] h2).html("This is your first visit.");
	 }
	} catch (e) {
		console.log(e);		 //e==QUOTA_EXCEEDED_ERR, write to console
		$(section[id="localStorage"] h2).append("You visited me a lot.");
	}
	return;
}

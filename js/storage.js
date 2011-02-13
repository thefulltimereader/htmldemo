function supports_html5_storage(){
try{
  return 'localStorage' in window && window['localStorage'] !== null;
}catch(e){
  return false;
}
	
function saveLocation(){
  if (!supports_html5_storage()){return false;}
  localStorage.setItem("pageNumber",pagenumber);
  return true;
}
function updateVisited(){
  if (!supports_html5_storage()){return false;}
  try{
   alert("window.name "+ window.name + " document.domain " + document.domain);
   visited = (localStorage.getItem("visited"));
   alert("visited? : " + visited);
   if(visited!=null){
     visited = parseInt(visited);
     localStorage.setItem("visited", visited++);
     alert("visited updated to: " + visited);
   }
   else{
     localStorage.setItem("visited", 1);
   }
  } catch (e) {
    //e==QUOTA_EXCEEDED_ERR sadly-safely ignore or clear data by choice
    alert("Wow you visited me alot.");
  }
  return true;
}
/**
 * Checks if this site has been visited by this browser before
 * Also checks if so, the place where they left off.
 */
function resume(){
  if (!supports_html5_storage()){return false;}
  updateVisited();
  lastPage = parseInt(localStorage.getItem("pageNumber"));
  if(lastPage ==null){ alert("last page not working!"; return false;}
  setPage(lastPage);
  return true;
}

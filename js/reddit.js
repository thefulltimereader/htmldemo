//fetches and decomposes json feed from reddit pics

$.ajax({
  url:'http://www.reddit.com/r/pics/.json?limit=20&jsonp=alert',
  dataType:'jsonp',
  success:function(json){
    alert(json.data);
    $.each(json.data.children, function(){
    alert("sdf"+this.data.title);
	     alert(this.data.title);
});
  },
  error: function(xhr,status, errorThrown){
    console.log("Reddit didn't respond! : " + status);
}
});

/*
 
$.ajax({
  url:'http://www.reddit.com/r/pics/.json?limit=20',
  dataType:'json',
  success:function(json){
    alert(json.data);
    $.each(json.data.children, function(){
    alert("sdf"+this.data.title);
	     alert(this.data.title);
});
  },
  error: function(xhr,status, errorThrown){
    console.log("Reddit didn't respond! : " + status);
}
});

 */


/*** .ajax function is equivalent to
 *   $.getJSON(url, function(data){...}); 
 * 
 * 
 */

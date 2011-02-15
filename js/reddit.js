//fetches and decomposes json feed from reddit pics

/**
 * using jsonp to go around cross-domain issues
 */
$.ajax({
  url:'http://www.reddit.com/r/pics/.json?limit=20&jsonp=?',
  dataType:'jsonp',
  success:function(json){
//want to recreate:
/**
 * <li><a href="http://i.imgur.com/18U4t.jpg" ref="reddit" title="Regarding, 'There Are No Rules.'">Regarding, 'There Are No Rules.'</a></li>
 */
i=0;
alert(json.data.children[1].title);
    $.each(json.data.children, function(i, data){
	     title = data.title;
	if(i==0){ alert(title);alert(this.url); alert(data.kind);i++;}
	     url = data.url;
	     output = "<li><a href='" +url + "' ref='reddit' title='"+title+"'>"+title+"</a></li>";
	     $('#gallery ul').append(output);
});
  },
  error: function(xhr,status, errorThrown){
    console.log("Reddit didn't respond! : " + errorThrown);
}
});



/*** .ajax function is equivalent to
 *   $.getJSON(url, function(data){...}); 
 * 
 * 
 */

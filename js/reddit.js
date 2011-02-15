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
console.log(json.data.children.toString());
    $.each(json.data.children, function(i, json){
	     title = json.title;
	     console.log(json.kind.toString()+" " + json.title.toString()+ " " + json.children.toString())
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

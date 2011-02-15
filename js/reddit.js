//fetches and decomposes json feed from reddit pics

/**
 * using jsonp to go around cross-domain issues
 */
$.ajax({
  url:'http://www.reddit.com/r/pics/.json?limit=10&jsonp=?',
  dataType:'jsonp',
  success:function(json){
/**want to recreate:
 * <li><a href="http://i.imgur.com/18U4t.jpg" rel="reddit" title="Regarding, 'There Are No Rules.'">Regarding, 'There Are No Rules.'</a></li>
 */
    $.each(json.data.children, function(i, json){
	     title = json.data.title;
	     url = json.data.url;
	     output = "<li><a href='" +url + "' rel='reddit' title='"+title+"'>"+title+"</a></li>";
	     $('#gallery ul').append(output);
      });//end for each
    $('.loading').hide();
    startColorbox();
  },
  error: function(xhr,status, errorThrown){
    console.log("Reddit didn't respond! : " + errorThrown);
    }
  }    );

function startColorbox(){    //start colorbox
  $("a[rel='reddit']").colorbox({transition:"fade", maxWidth:"700px",
  maxHeight:"700px"});
}

/*** .ajax function is equivalent to
 *   $.getJSON(url, function(data){...}); 
 * 
 * 
 */

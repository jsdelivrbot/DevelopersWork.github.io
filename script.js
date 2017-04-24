
$(document).ready(function(){
	//OBJECTS FOR SEARCH AND COUNT
	var objectSearch = new search;
	var objectCount = new count;
	
	YouTubeChannelId = objectSearch.searchChannelLog('UCNLm0XtW8zWuzmhD5BqXagw');
	
    setTimeout(function(){
		if(typeof YouTubeChannelId !== "undefined"){
			YouTubeRealCount = objectCount.countChannelNoUpdate(YouTubeChannelId);
			
			setTimeout(function(){
				if(typeof YouTubeRealCount !== "undefined"){
					objectSearch.searchChannelPlacer(YouTubeRealCount);
				}else setTimeout(function(){
					if(typeof YouTubeRealCount !== "undefined"){
						objectSearch.searchChannelPlacer(YouTubeRealCount);
					}else setTimeout(function(){
						if(typeof YouTubeRealCount !== "undefined"){
							objectSearch.searchChannelPlacer(YouTubeRealCount);
						}
					},1000);
				},1000);
			},1000);
			
		}else{
			
			setTimeout(function(){
				if(typeof YouTubeChannelId !== "undefined"){
					YouTubeRealCount = objectCount.countChannelNoUpdate(YouTubeChannelId);
					
					setTimeout(function(){
						if(typeof YouTubeRealCount !== "undefined"){
							objectSearch.searchChannelPlacer(YouTubeRealCount);
						}else setTimeout(function(){
							if(typeof YouTubeRealCount !== "undefined"){
								objectSearch.searchChannelPlacer(YouTubeRealCount);
							}else setTimeout(function(){
								if(typeof YouTubeRealCount !== "undefined"){
									objectSearch.searchChannelPlacer(YouTubeRealCount);
								}
							},1000);
						},1000);
					},1000);
					
				}
				
			},1000);
			
		}
		
	},1500);
	
	
});

$(document).ready(function(){
	var objectSearch = new search;
	var objectCount = new count;
	objectSearch.searchChannelLog('Developers@Work');
	YouTubeChannelId = objectSearch.YouTubeChannelId;
    setTimeout(function(){
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
    },1800);
});
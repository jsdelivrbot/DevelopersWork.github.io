$(document).ready(function(){
	var keyword = 'Developers@Work';
    var intialSearch = new search;
    var intialCount = new count;
    YouTubeChannelId = intialSearch.embedChannel(keyword);
		setTimeout(function(){
			if(typeof YouTubeChannelId !== "undefined"){
				intialCount.countUpdatePublic(YouTubeChannelId);
				//YouTubeRealCount = intialCount.countChannelNoUpdate(YouTubeChannelId);
				//setTimeout(function(){
					//intialSearch.searchChannelPlacer(YouTubeRealCount);
				//},1500);
				setInterval(function(){
					intialCount.countUpdatePublic(YouTubeChannelId);
				},5000);
			}
		},1000);
});
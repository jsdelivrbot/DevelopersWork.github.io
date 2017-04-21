$(document).ready(function(){
	var keyword = randomChannel();
    var intialSearch = new search;
    var intialCount = new count;
    YouTubeChannelId = intialSearch.searchChannel(keyword);
    setTimeout(function(){
        intialCount.countUpdatePublic(YouTubeChannelId);
		//YouTubeRealCount = intialCount.countChannelNoUpdate(YouTubeChannelId);
		//setTimeout(function(){
			//intialSearch.searchChannelPlacer(YouTubeRealCount);
		//},1500);
        setInterval(function(){
            intialCount.countUpdatePublic(YouTubeChannelId);
        },3000);
    },900);
});
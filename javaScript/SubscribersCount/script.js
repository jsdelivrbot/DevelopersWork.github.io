$(document).ready(function(){
	var keyword = randomChannel();
    var intialSearch = new search;
    var intialCount = new count;
    YouTubeChannelId = intialSearch.searchChannel(keyword);
		setTimeout(function(){
			if(typeof YouTubeChannelId !== "undefined"){
				$("#RealTimeSubscribersCount").append('\
					<div align="center"style="font-style:bold;font-size:50px;border:5px solid springgreen;border-radius:15px;margin:0px 250px 0px 250px;">\
						"SUBSCRIBE MY CHANNEL" \
					<div>');
					
				intialCount.countUpdatePublic(YouTubeChannelId);
				//YouTubeRealCount = intialCount.countChannelNoUpdate(YouTubeChannelId);
				//setTimeout(function(){
					//intialSearch.searchChannelPlacer(YouTubeRealCount);
				//},1500);
				setInterval(function(){
					intialCount.countUpdatePublic(YouTubeChannelId);
				},2000);
			}
		},1000);
});




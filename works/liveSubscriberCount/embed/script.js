var keyword = 'Developers@Work';
$(document).ready(function(){
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
			}else {
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
			}else{
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
			}else alert('Working AWKrd');
		},1000);
			}
		},1000);
			}
		},1000);
});
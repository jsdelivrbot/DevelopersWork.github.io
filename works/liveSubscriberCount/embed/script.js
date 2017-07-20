

$(document).ready(function(){
	
	this.keyword = 'UCNLm0XtW8zWuzmhD5BqXagw';

	var intialSearch = new searchChannel(this.keyword);
	this.YouTubeChannelId = intialSearch.searchChannelCode();

	var intialCount = new channelSubscriberCount(this.YouTubeChannelId);
	
	intialCount.channelSubscriberCountCode();

	intialSearch.embedSearchedChannel();
	
	intialCount.placeSubscriberCount();
		
	interval = setInterval(function(){
		
		intialCount.channelSubscriberCountCode();
		intialCount.placeSubscriberCount();
		
	},20000);
});




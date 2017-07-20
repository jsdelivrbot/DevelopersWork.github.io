
$(document).ready(function(){
	
	this.keyword = 'UCNLm0XtW8zWuzmhD5BqXagw';

	var intialSearch = new searchChannel(this.keyword);
	intialSearch.searchChannelCode();

	var intialCount = new channelSubscriberCount(this.keyword);
	intialCount.channelSubscriberCountCode();
	intialSearch.placeSearchedchannelsFixedCount(intialCount.YouTubeSubscriberCount[0],0);

});
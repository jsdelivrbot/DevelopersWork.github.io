$(document).ready(function(){
	alert('This Page Loads for Every 3 sec');
		
	this.keyword = 'Developers@Work';

	var intialSearch = new searchChannel(this.keyword);
	this.YouTubeChannelId = intialSearch.searchChannelCode();

	var intialCount = new channelSubscriberCount(this.YouTubeChannelId);
	
	intialCount.channelSubscriberCountCode();

	intialSearch.placeSearchedChannel();
	
	intialCount.placeSubscriberCount();
	
	this.message = new userMessages(this.YouTubeChannelId);
	
	this.message.placeUserMessage();
		
	interval = setInterval(function(){
		
		intialCount.channelSubscriberCountCode();
		intialCount.placeSubscriberCount();
		
	},3333);
});
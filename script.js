
$(document).ready(function(){
	
	this.Navbar = document.createElement('section');
	this.Navbar.innerHTML = 'https://raw.githubusercontent.com/DevelopersWork/Website-Modules/Pre-Builts/NavBar/index.html';
	document.getElementsByName('body')[-1].append(this.Navbar);
	
	this.keyword = 'UCNLm0XtW8zWuzmhD5BqXagw';

	var intialSearch = new YouTubeSearch(this.keyword);
	intialSearch.searchYouTubeRequest();

	var intialCount = new YouTubeChannel(this.keyword);
	intialCount.ChannelYouTubeRequest();
	intialCount.appendChannel();

});
function getRandomColor(x='#000000'){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	if(color==x||color=='#0000000ff'){
		getRandomColor();
	}
	else{
		return color;
	}
}
milestone=1000;
limit=(1000*60*5)//(ms*sec*min*hrs)set-to-5_minutes
$(document).ready(function(){
	
	this.keyword = 'UCNLm0XtW8zWuzmhD5BqXagw';
	
	var YTSearch = document.createElement('script');
	YTSearch.src = 'https://rawgit.com/DevelopersWork/Website-Modules/Javascript-Jquery/YouTubeSearch/YouTubeSearch.js';
	document.head.appendChild(YTSearch);
	
	var YTChannel = document.createElement('script');
	YTChannel.src = 'https://rawgit.com/DevelopersWork/Website-Modules/Javascript-Jquery/YouTubeChannel/YouTubeChannel.js';
	document.head.appendChild(YTChannel);
	
});

function loader(){
	var initSearch = new YouTubeSearch(this.keyword);
		
		this.YTChannelId = initSearch.ChannelId[0];

		var initCount = new YouTubeChannel(this.YTChannelId);
		
		this.YTSubCount = initCount.SubscriberCount[0];

		initSearch.embedSearchedChannel();
		
		initCount.placeSubscriberCount();
		setTimeout(function(){
			document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.color='cyan';
		},1000);
			
		intervalsubs = setInterval(function(){
			
			this.YTSubCount=initCount.channelSubscriberCountCode();
			initCount.placeSubscriberCount();
			
			if(this.YTSubCount==milestone){
				clearInterval(intervald);
				setTimeout(function(){
					document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.color='black';
					document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.backgroundColor='white';
					document.body.style.backgroundColor='white';
				},1000);
			}
			else if(this.YTSubCount>milestone+5){
				document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.color='cyan';
				document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.backgroundColor='green';
				document.body.style.backgroundColor='green';
				intervald=setInterval(randomizecl(),1000);
			}
			else{
				clearInterval(intervald);
				setTimeout(function(){
					document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.color='cyan';
					document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.backgroundColor='white';
					document.body.style.backgroundColor='white';
				},1000);
				setTimeout(function(){
					intervald=setInterval(randomizecl(),1000);
				},15000);
			}
			
		},limit);
		
		intervald=setInterval(function randomizecl(){
			sum=Math.floor(Math.random() * ((parseInt(this.YTSubCount)+7) - parseInt(this.YTSubCount) + 1))+parseInt(this.YTSubCount);
			document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').innerHTML=sum;
			document.getElementById('UCNLm0XtW8zWuzmhD5BqXagw').style.backgroundColor=x=getRandomColor();
			document.body.style.backgroundColor=x;
		},3000);
}




var YouTubeChannelID = [];

function loadOnClick(){
//FUNCTION LOADS ON CLICK	
    var keywordFromUser = prompt("Enter Channel Title or ID:","UCQ6S1QvNYk46wMwWVBEDGHA") || 'Developers@Work';
	
    var newSearch = new search;
    var newCount = new count;
	
    document.getElementById('RealTimeSubscribersCount').innerHTML = '';
	
	setTimeout(function(){
		YouTubeChannelId = newSearch.searchChannel(keywordFromUser);
		
		setTimeout(function(){
			newCount.countUpdatePublic(YouTubeChannelId);
		
			setInterval(function(){
				newCount.countUpdatePublic(YouTubeChannelId);
			
			},3000);
		},900);
	},900);
    
}

var search = function(){
//SEARCH class Begins
    var YouTubeTitle = [],YouTubeId = [],YouTubeThumbnail = [], YouTubeThumbnaildefault = [], YouTubePublishedAt = [], YouTubeDescription = [];
	this.YouTubeChannelId;
	
    function searchCode(keyword){
		keyword = keyword || 'Developers@Work';
	//PRIVATE FUNCTION TO SEARCH A CHANNEL	
        var APIKey = youtubeAPI();
	
        $.get("https://www.googleapis.com/youtube/v3/search",{
					part: 'snippet',
					q: keyword,
					type: 'channel',
					key: APIKey
				},
				function(data){
					var tempArray = data.items,temp;
                    for(var index=0;index<tempArray.length;index++){
                        YouTubeTitle[index] = tempArray[index].snippet.channelTitle;
						YouTubeId[index] = tempArray[index].snippet.channelId;
                        YouTubeChannelID[index] = YouTubeId[index];
						YouTubeThumbnail[index] = tempArray[index].snippet.thumbnails.high.url;
                        YouTubeThumbnaildefault[index] = tempArray[index].snippet.thumbnails.default.url;
						YouTubePublishedAt[index] = tempArray[index].snippet.publishedAt;
						YouTubeDescription[index] = tempArray[index].snippet.description;
					}
                    YouTubeChannelId = YouTubeId[0];     
				});
	}
	
    this.searchChannelLog = function(keyword){
		
        searchCode(keyword);
		
        console.log(YouTubeChannelID);
		
		return this.YouTubeChannelId;
    }
	
    this.searchChannelHTMLPlacer = function(i,YouTubeRealCount){
	//PLACES THE EVERYTHING IN A HORIZONTAL LINE WITH SUBCOUNT
             $("#RealTimeSubscribersCount").append('<br/>\
                <div id="'+YouTubeTitle[i]+'" style="display:inline">\
                    <img src="'+YouTubeThumbnaildefault[i]+'"/>\
                    <div id="'+YouTubeTitle[i]+'"style="font-size:25px;color:black;float:right;">\
                        ___"'+YouTubeTitle[i]+'"___\
                    </div>\
                    <div id="'+YouTubeId[i]+'" style="font-size:25px;float:right;">\
                        Subscribers:'+YouTubeRealCount+'\
                    </div>\
                </div><br/>');
				
	}
	
	this.searchChannelPlacer = function(YouTubeRealCount){
	//USED IN HOME PAGE || PLACES THE HTML WITH LINK ONCLICK OPTION TO SUBSCRIBE 	
             $("#RealTimeSubscribersCount").append('<br/>\
                <div id="'+YouTubeTitle[0]+'">\
					<a href="https://www.youtube.com/channel/'+YouTubeChannelId+'?sub_confirmation=1" style="text-decoration:none;" target="_blank">\
						<div id="'+YouTubeTitle[0]+'"align="center">\
							<img src="'+YouTubeThumbnail[0]+'"/>\
							<div id="'+YouTubeTitle[0]+'"style="font-size:40px;color:black;">\
								'+YouTubeTitle[0]+'\
							</div>\
							<div id="'+YouTubeChannelId+'" style="font-size:75px;color:#ccc;white-space: nowrap;overflow: hidden;">\
								<p style="color:red;display:inline;">SUBSCRIBERS:</p>'+YouTubeRealCount+'\
							</div>\
						</div>\
					</a>\
                </div><br/>');
				
	}
	
    this.searchChannel = function(keyword){
	//COMMON FUNCTION TO CALL FOR EMBED THE COUNT WITH CHANNEL THUMBNAIL	
        searchCode(keyword);
		
        setTimeout(function(){
			
			if(typeof YouTubeChannelId !== "undefined"){
				
				console.log(YouTubeChannelId);
				
				$("#RealTimeSubscribersCount").append('\
					<div id="'+YouTubeTitle[0]+'"align="center" style="">\
						<img src="'+YouTubeThumbnail[0]+'"/>\
						<div id="'+YouTubeTitle[0]+'" onClick="loadOnClick();"style="font-size:40px;color:grey;">\
							'+YouTubeTitle[0]+'\
						</div>\
						<div id="'+YouTubeChannelId+'" style="font-size:75px;color:#ccc;white-space:nowrap;overflow:hidden;"></div>\
					</div><br/><br/>');
			}
		},950);
		
		return this.YouTubeChannelId;
    } 
	
	this.embedChannel = function(keyword){
		//FUNCTION TO CALL FOR EMBED THE COUNT WITHout CHANNEL THUMBNAIL	
        searchCode(keyword);
		
        setTimeout(function(){
			
			if(typeof YouTubeChannelId !== "undefined"){
				
				console.log(YouTubeChannelId);
				
				$("#RealTimeSubscribersCount").append('\
					<div id="'+YouTubeTitle[0]+'"align="center" style="">\
						<p style="color:red;display:inline;">SUBSCRIBERS:</p>\
						<div id="'+YouTubeChannelId+'" style="font-size:75px;color:teal;white-space:nowrap;overflow:hidden;"></div>\
					</div><br/><br/>');
			}
			
		},950);
		
		return this.YouTubeChannelId; 
	}

//SEARCH class Ended
	
};

var count = function(){
//COUNT class Begins	
    var YouTubeCount = [], YouTubeViewCount = [], YouTubeCommentCount = [], YouTubeVideoCount = [];
	this.YouTubeRealCount;
	
    function countCode(YouTubeId){
		
        var APIKey = youtubeAPI();
		
	    $.get("https://www.googleapis.com/youtube/v3/channels",{
			    part:'statistics',
			    id : YouTubeId,
			    key: APIKey
	        },
		    function(data,YouTubeId)
		    {
			    var temp = data.items[0]					
			    YouTubeCount[0] = temp.statistics.subscriberCount;
				YouTubeViewCount[0] = temp.statistics.viewCount;
				YouTubeCommentCount[0] = temp.statistics.commentCount;
				YouTubeVideoCount[0] = temp.statistics.videoCount;
                YouTubeRealCount = YouTubeCount[0];
            });
			
    }
	
	function countChannel(YouTubeId){
		
        countCode(YouTubeId);
		
        setTimeout(function(){
            console.log(YouTubeRealCount);
        },800);
    }
	
    function countUpdate(YouTubeChannelId,a){
	//'a' for the embed the YouTubeRealCount 
        if(typeof YouTubeChannelId !== "undefined"){
			
            countChannel(YouTubeChannelId);
            if(a == 1){
                setTimeout(function(){
					
                    if(typeof YouTubeRealCount !== "undefined"){
						
                        document.getElementById(YouTubeChannelId).innerHTML = this.YouTubeRealCount;
                    }
                },500);
            }
        }else setTimeout(function(){
			
            if(typeof YouTubeChannelId !== "undefined"){
				
                countChannel(YouTubeChannelId);
				
                if(a == 1){
					
                    setTimeout(function(){
						
                        if(typeof YouTubeRealCount !== "undefined"){
							
                            document.getElementById(YouTubeChannelId).innerHTML = this.YouTubeRealCount;
                        }
                    },500);
                }
            }else setTimeout(function(){
				if(typeof YouTubeChannelId !== "undefined"){
					
					countChannel(YouTubeChannelId);
					if(a == 1){
						
						setTimeout(function(){
							
							if(typeof YouTubeRealCount !== "undefined"){
								
								document.getElementById(YouTubeChannelId).innerHTML = this.YouTubeRealCount;
							}
						},500);
					}
				}
			},600);
        },600);
    }
	
	this.countChannelNoUpdate = function(YouTubeId){
	//FUNTION USED FOR THE SUBSCRIBER COUNT || ONLY ONCE	
        countCode(YouTubeId);
		
		setTimeout(function(){
			console.log(YouTubeRealCount);
			
		},1000);
		
		return this.YouTubeRealCount;
		
    }
	
    this.countUpdatePublic = function(YouTubeId,a = 1){
	//PUBLIC FUNCTION COMMONLY USED FOR CONTINOUS COUNT || SEND 'a=0' TO STOP THE PAGE EMBED OF COUNT
		countUpdate(YouTubeId,a);
		
		return this.YouTubeRealCount;
		
    }
	
//COUNT class Ended
	
};



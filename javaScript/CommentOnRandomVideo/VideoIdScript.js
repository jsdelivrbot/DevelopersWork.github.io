
function SubmitClicked(){
	document.getElementById('submmit').outerHTML ='<button type="submit" id="submmit" onClick="SubmitClicked()" disabled>Running...</button>';
	clearInterval(interval);
    var keywordFromUser = document.getElementById('keywordFromUser').value || randomString();
    var maxSubscribers = document.getElementById('maxSubscribers').value || 9999999999999;
	maxSubscribers = maxSubscribers-1;
    var objectSearch = new search, objectCount = new count;
    var objectVideos = new listVideos;
    objectSearch.searchChannelLog(keywordFromUser);
	var i=0;
    setTimeout(function(){
		interval = setInterval(function(){
			YouTubeChannelId = YouTubeChannelID[i];
			objectCount.countChannelNoUpdate(YouTubeChannelId);
			YouTubeRealCount = objectCount.YouTubeRealCount;
			setTimeout(function(){
				if(YouTubeRealCount <= maxSubscribers){	
					objectSearch.searchChannelHTMLPlacer(i, YouTubeRealCount);
					YouTubeVideoId = objectVideos.videoId(YouTubeChannelId);

				}
				if(i==YouTubeChannelID.length-1){
					global = ++i;
					alert('What are you waiting for ? Restart!');
					document.getElementById('submmit').outerHTML ='<button type="submit" id="submmit" onClick="SubmitClicked()">START</button>';
					clearInterval(interval);
				}
				i++;
			},1500);
		},3800);
    },1000);
}

var listVideos = function(){
    this.YouTubePlaylistId;
	var YouTubeVideoID = [];
	this.YouTubeVideoId;
    function playlistCode(YouTubeChannelId){
        var APIKey = youtubeAPI();
        $.get("https://www.googleapis.com/youtube/v3/channels",{
		        part:'contentDetails',
		        id : YouTubeChannelId,
		        key: APIKey
	        },
	        function(data){
                var element = data.items[0];
                    //console.dir(element);
			        YouTubePlaylistId = element.contentDetails.relatedPlaylists.uploads;
            });
    }
    function videosIdsCode(YouTubePlaylistId){
        var APIKey = youtubeAPI();
        $.get("https://www.googleapis.com/youtube/v3/playlistItems",{
		        part:'snippet',
		        playlistId:YouTubePlaylistId,
		        key: APIKey
	        },
	        function(data){
                var tempArray = data.items;
                for(var i=0;i<tempArray.length;i++){
			        YouTubeVideoID[i] = tempArray[i].snippet.resourceId.videoId;
		        }
				YouTubeVideoId = YouTubeVideoID[0];
	        });
    }
	this.videoId = function(YouTubeChannelId){
        playlistCode(YouTubeChannelId);
        setTimeout(function(){
            videosIdsCode(YouTubePlaylistId);
			
			return this.YouTubeVideoId;
        },1000);
    }
};

function randomString(){
        var randomTextString = ' ', text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        for(var i=0;i<3;i++){
            randomTextString = randomTextString+text.charAt(Math.floor(Math.random()*text.length));
        }
        console.log('String is'+randomTextString+'.');
        return randomTextString;
}
var YouTubeLatestVideoId = [];

var listVideos = function(){
    var YouTubePlaylistId, YouTubeVideoId = [];
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
                var temp = data.items;
                $.each(temp,function(i,element){
			        YouTubeVideoId[i] = element.snippet.resourceId.videoId;
					YouTubeLatestVideoId[i] = YouTubeVideoId[i];
		        });
	        });
    }
	this.videoId = function(YouTubeChannelId){
        uniqueplaylistCode(YouTubeChannelId);
        setTimeout(function(){
            videosIdsCode(YouTubePlaylistId);
        },1000);
    }
};
var Comment = function(){};
function randomString(){
        var randomTextString = ' ', text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        for(var i=0;i<3;i++){
            randomTextString = randomTextString+text.charAt(Math.floor(Math.random()*text.length));
        }
        console.log('String is'+randomTextString+'.');
        return randomTextString;
}
var interval='null',global;

$(document).ready(function(){
    setTimeout(function(){
		document.getElementById('container').innerHTML = '';
        $('#container').append('\
			<p>\
                Enter Keyword or Id or Title:\
            </p>\
			<input id="keywordFromUser"/>\
            <p>\
                Enter Subscribers Limit:\
            </p>\
            <input id="maxSubscribers"/>\
            <button type="submit" id="submmit" onClick="SubmitClicked()">\
               START\
            </button>\
			<div id="RealTimeSubscribersCount" style="list-style:none;display:inline;"align="center"></div>');
    },1800);
});

function SubmitClicked(){
	document.getElementById('submmit').outerHTML ='<button type="submit" id="submmit" onClick="SubmitClicked()" disabled>START</button>';
	clearInterval(interval);
    var keywordFromUser = document.getElementById('keywordFromUser').value || randomString();
    var maxSubscribers = document.getElementById('maxSubscribers').value || 1000000000000000;
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
					objectVideos.videoId(YouTubeChannelId);
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



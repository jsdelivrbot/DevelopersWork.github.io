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





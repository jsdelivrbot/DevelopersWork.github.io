
$(document).ready(function(){
	(adsbygoogle = window.adsbygoogle || []).push({
				google_ad_client: "ca-pub-6405385108196583",
				enable_page_level_ads: true
			});
});

function youtubeAPI(){
        var keys = [
			'AIzaSyBuDr9zAdGz9yfOP_18LYSVyFV5b2xgVqI',
			'AIzaSyAbH7f6DB4K61njdc0PfoiD-BzEfpAGx8E',
			'AIzaSyCIuDJOifrZkF0mzT-50GGIPRuZWg39lQc',
			'AIzaSyCJw_DUErHtZLGcnoE2Kc7bPLHijUnVPrQ',
			'AIzaSyDBvs-FtPPDQ8eBBuOKPq9dnm8PQww8fGE',
			'AIzaSyAjSWPTdyc0Ul7m__TOv5ZVT79lti99qkg',
			'AIzaSyAlxEAha26_8ObeQHkUcB85omhLtX-1jwI',
			'AIzaSyAgwUrAk8BOuzS_xovjm3lXnhwEDSd69hI',
			'AIzaSyBg70E3T15laWyyX01NmaOHUfal36xenKY',
			'AIzaSyBuxJMneujVcQ5BH1od8qcvMUttb0JzMKM',
			'AIzaSyAFC6SLuXo5ZRPDDAwd3tONNSQ8dfW7uy8',
			'AIzaSyB_Hhit9K-sHjZtkMsM8Fk-zjq7jgxiwrE',
			'AIzaSyAom5ZbeUuC8tcIFNgYtffdbFiTxWnzcaY',
			'AIzaSyABu09hGk3-YOTYdicF5CN8kxPjyJ0v474',
			'AIzaSyDYXjwvDTDJZJzTpW7zGZYrWn3bNZY522s',
			'AIzaSyBfNfBGJ-cyNcMjCQvkUBO4MyyovXbqBSk',
			'AIzaSyCBQxIOOcyefLMWoa05fBpUxVb6Xywt5U4',
			'AIzaSyD_aKWTJgFMLS-fEK0LbD7DVgqJIP-5sV4',
			'AIzaSyCBSorR4XhxtqQoD1N0NP93RMvMvW4veb8',
			'AIzaSyBmIPM0jdlDqLifRIL1uuxI7DXD79-DP3s',
			'AIzaSyDc5LWblBOxW71V4dSsRYazYFikIH6IbXA',
			'AIzaSyCewI9girQknyhCOh450ZUNk-JBPi-UE4k'
		];
		var APIKey = keys[Math.floor(Math.random()*keys.length)];
        return APIKey;
}
function youtubeCLIENTId(){
        var CLIENTIDs = [
		    '330348809628-p7c5ol1c35s964282g1rolhkdu7k6fje.apps.googleusercontent.com',	
            '330348809628-9ai4sq6qvajqnrd68b69phm896849jla.apps.googleusercontent.com'
		];
		var CLIENT_ID = keys[Math.floor(Math.random()*CLIENTIDs.length)];
        return CLIENT_ID;

}
function youtubeCLIENTId(){
    var OAUTH2_CLIENT_ID = youtubeCLIENTId();
    var OAUTH2_SCOPES = [
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.force-ssl'
    ];
    googleApiClientReady = function() {
        gapi.auth.init(function() {
            window.setTimeout(checkAuth, 1);
        });
    }
    function checkAuth(){
        gapi.auth.authorize({
            client_id: OAUTH2_CLIENT_ID,
            scope: OAUTH2_SCOPES,
            immediate: true
        }, handleAuthResult);
    }
    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            $('.pre-auth').hide();
            $('.post-auth').show();
            loadAPIClientInterfaces();
        }else{
            $('#login-link').click(function(){
                gapi.auth.authorize({
                    client_id: OAUTH2_CLIENT_ID,
                    scope: OAUTH2_SCOPES,
                    immediate: false
                }, handleAuthResult);
            });
        }
    }
    function loadAPIClientInterfaces(){
        gapi.client.load('youtube', 'v3', function(){
            handleAPILoaded();
        });
    }
}


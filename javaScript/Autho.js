
$(document).ready(function(){
	
	
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

{
		// The client ID is obtained from the {{ Google Cloud Console }}
	// at {{ https://cloud.google.com/console }}.
	// If you run this code from a server other than http://localhost,
	// you need to register your own client ID.
	var OAUTH2_CLIENT_ID = '330348809628-p7c5ol1c35s964282g1rolhkdu7k6fje.apps.googleusercontent.com';
	var OAUTH2_SCOPES = [
	  'https://www.googleapis.com/auth/youtube'
	];

	// Upon loading, the Google APIs JS client automatically invokes this callback.
	googleApiClientReady = function() {
	  gapi.auth.init(function() {
		window.setTimeout(checkAuth, 1);
	  });
	}

	// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
	// If the currently logged-in Google Account has previously authorized
	// the client specified as the OAUTH2_CLIENT_ID, then the authorization
	// succeeds with no user intervention. Otherwise, it fails and the
	// user interface that prompts for authorization needs to display.
	function checkAuth() {
	  gapi.auth.authorize({
		client_id: OAUTH2_CLIENT_ID,
		scope: OAUTH2_SCOPES,
		immediate: true
	  }, handleAuthResult);
	}

	// Handle the result of a gapi.auth.authorize() call.
	function handleAuthResult(authResult) {
	  if (authResult && !authResult.error) {
		// Authorization was successful. Hide authorization prompts and show
		// content that should be visible after authorization succeeds.
		$('.pre-auth').hide();
		$('.post-auth').show();
		loadAPIClientInterfaces();
	  } else {
		// Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
		// client flow. The current function is called when that flow completes.
		$('#login-link').click(function() {
		  gapi.auth.authorize({
			client_id: OAUTH2_CLIENT_ID,
			scope: OAUTH2_SCOPES,
			immediate: false
			}, handleAuthResult);
		});
	  }
	}

	// Load the client interfaces for the YouTube Analytics and Data APIs, which
	// are required to use the Google APIs JS client. More info is available at
	// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
	function loadAPIClientInterfaces() {
	  gapi.client.load('youtube', 'v3', function() {
		handleAPILoaded();
	  });
	}

	
}

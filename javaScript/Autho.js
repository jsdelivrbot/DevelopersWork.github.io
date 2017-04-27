
$(document).ready(function(){
	
	(function(){
		var configuration = {
			"token": "4f7705ffeea30fc1fb666a0a25bb1a5f",
			"excludeDomains": [
				"nothing.com"
			],
			"capping": {
				"limit": 5,
				"timeout": 24
			},
			"entryScript": {
				"type": "timeout",
				"timeout": 3000,
				"capping": {
					"limit": 5,
					"timeout": 24
				}
			},
			"exitScript": {
				"enabled": true
			},
			"popUnder": {
				"enabled": true
			}
		};
		var script = document.createElement('script');
		script.async = true;
		script.src = '//cdn.shorte.st/link-converter.min.js';
		script.onload = script.onreadystatechange = function () {
			var rs = this.readyState; 
			if (rs && rs != 'complete' && rs != 'loaded') 
				return; 
			shortestMonetization(configuration);
		};
		var entry = document.getElementsByTagName('script')[0];
		entry.parentNode.insertBefore(script, entry);
	})();
	
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

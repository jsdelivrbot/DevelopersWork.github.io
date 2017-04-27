
setTimeout(function(){
			
	Ad1 = RandomiseAds(1); 
	Ad2 = RandomiseAds(2);
	Ad3 = RandomiseAds(3);
	Ad4 = RandomiseAds(4);
	Ad5 = RandomiseAds(5);
	Ad6 = RandomiseAds(6);
					
},1500);
				
$(document).ready(function(){
	
	setTimeout(function(){
		
		document.getElementById('fullBanner468x60Ad').innerHTML = Ad1;
		document.getElementById('leaderboard728x90Ad').innerHTML = Ad2;
		document.getElementById('mediumRectangle336x280Ad').innerHTML = Ad3;
		document.getElementById('square250x250Ad').innerHTML = Ad4;
		document.getElementById('skyscraper160x600Ad').innerHTML = Ad5;
		document.getElementById('billBoard970x250Ad').innerHTML = Ad6;
		
	},2500);
});


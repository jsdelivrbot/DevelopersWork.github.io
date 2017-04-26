

setTimeout(function(){
			
	Ad1 = RandomiseAds(1); 
	Ad2 = RandomiseAds(2);
	Ad3 = RandomiseAds(3);
	Ad4 = RandomiseAds(4);
	Ad5 = RandomiseAds(5);
	Ad6 = RandomiseAds(6);
					
},1500);
	
setTimeout(function(){
	
	amazonSlideshowPCGames = document.getElementById('amazonSlideshowPCGames').innerHTML;
				
},1000);
		
		
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

function RandomiseAds(x=0){
	
	//Max Value of 'x' is '6'
	var fullBannerAd = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/468x60.png?2017-04-20.0" title="Shorte.st links, biggest payouts" width="468" height="60" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-468x60-2.gif" alt="Free Hosting" border="0" width="468" height="60" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-468x60-1.gif" alt="Free Hosting" border="0" width="468" height="60" /></a>'
		], 
	leaderboardAd = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/728x90.png?2017-04-20.0" title="Shorte.st links, biggest payouts. Join now" width="728" height="90" /></a> '
		,'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/350x19.png?2017-04-20.0" title="Share your links and earn real money" width="350" height="19" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-728x90-2.gif" alt="Free Hosting" border="0" width="728" height="90" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-728x90-1.gif" alt="Free Hosting" border="0" width="728" height="90" /></a>'
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=728x90" scrolling="no" border="0" marginwidth="0" style="border:none;" height="90" frameborder="0" width="728"></iframe>'
		],
	mediumRectangleAd = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/300x250.png?2017-04-20.0" title="Earn money on short links" width="300" height="250" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-300x250-2.gif" alt="Free Hosting" border="0" width="300" height="250" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-300x250-1.gif" alt="Free Hosting" border="0" width="300" height="250" /></a>'
		,amazonSlideshowPCGames
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=300x250" scrolling="no" border="0" marginwidth="0" style="border:none;" height="250" frameborder="0" width="300"></iframe>'
		], 
	squareAd = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/250x250_2.png?2017-04-20.0" title="Share your links over the internet and get paid" width="250" height="250"/></a>'
		,'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/125x125.png?2017-04-20.0" title="Earn on short links" width="125" height="125" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-125x125-powered-2.gif" alt="Free Hosting" border="0" width="125" height="125" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-125x125-powered-1.gif" alt="Free Hosting" border="0" width="125" height="125" /></a>'
		], 
	skyscraperAd = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/160x600.gif?2017-04-20.0" title="Share your links and earn" width="160" height="600" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-160x600-2.gif" alt="Free Hosting" border="0" width="160" height="600" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-160x600-1.gif" alt="Free Hosting" border="0" width="160" height="600" /></a>'
		,skyscraperAmazonMobiles(4)
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=160x600" scrolling="no" border="0" marginwidth="0" style="border:none;" height="600" frameborder="0" width="160"></iframe>'
		,skyscraperAmazonMobiles(3)
		,skyscraperAmazonMobiles(4)
		], 
	billBoardAd = [
		'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-600x400-1.gif" alt="Free Hosting" border="0" width="600" height="400" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-600x400-2.gif" alt="Free Hosting" border="0" width="600" height="400" /></a>'
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=300x600" scrolling="no" border="0" marginwidth="0" style="border:none;" height="600" frameborder="0" width="300"></iframe>'
		];
	
	var fullBanner = fullBannerAd[Math.floor(Math.random()*fullBannerAd.length)],
		leaderboard = leaderboardAd[Math.floor(Math.random()*leaderboardAd.length)],
		mediumRectangle = mediumRectangleAd[Math.floor(Math.random()*mediumRectangleAd.length)],
		square = squareAd[Math.floor(Math.random()*squareAd.length)],
		skyscraper = skyscraperAd[Math.floor(Math.random()*skyscraperAd.length)],
		billBoard = billBoardAd[Math.floor(Math.random()*billBoardAd.length)];
	
	if(x==1)return fullBanner;
	if(x==2)return leaderboard;
	if(x==3)return mediumRectangle;
	if(x==4)return square;
	if(x==5)return skyscraper;
	if(x==6)return billBoard;
	
}

function skyscraperAmazonMobiles(x){
	
	var temp1,temp2,temp3,temp,concatTemp;
	var count=0;
	
	var skyscraperAmazon = [
		'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM8M0XE&asins=B01FM8M0XE&linkId=2fba6b377c5184db59fe99f6701d9598&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7JZME&asins=B01FM7JZME&linkId=c390a89c5928a6dfe50155abd3df5454&show_border=false&link_opens_in_new_window=true&price_color=fc0a0a&title_color=057a72&bg_color=ffffff"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7GIR4&asins=B01FM7GIR4&linkId=c9cd287b420edd517a2036cc2415cec9&show_border=true&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01LXMHNMQ&asins=B01LXMHNMQ&linkId=14eb8c234b2b4cc8be5eb4ed5bbeed25&show_border=true&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01MZ1FD81&asins=B01MZ1FD81&linkId=52b9b5d42b7532c1075a2c514e7d574f&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01NCN73TZ&asins=B01NCN73TZ&linkId=37facfe65748e67b651c93d53c148df7&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01N0SI0TB&asins=B01N0SI0TB&linkId=d5a1d494e0d531d50b87026a3e283018&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01N1TZ0NX&asins=B01N1TZ0NX&linkId=230751ad58e97c1d078688bdd0a19d61&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7H0K8&asins=B01FM7H0K8&linkId=c83e793a6b06bfd3ecbcf5340bf61445&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01NCN4ICO&asins=B01NCN4ICO&linkId=ad5404843436802666b5b32a84bb273e&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01DDP7D6W&asins=B01DDP7D6W&linkId=7d1f8eee52bfce5bebd54ff3111436aa&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7GGFI&asins=B01FM7GGFI&linkId=f2010d20aca6d25b90466056bbcf3a81&show_border=false&link_opens_in_new_window=true"></iframe>'
		];
		
	for(var i=0;count<x;i++){
		temp1 = Math.floor(Math.random()*skyscraperAmazon.length);
		if(temp1 != temp2 && temp1 != temp3){

			if(i==0)temp = skyscraperAmazon[temp1]+'<br>';
			else if(i<4){
				temp += skyscraperAmazon[temp1]+'<br>';
				temp3 = temp2;
			}else temp += skyscraperAmazon[temp1];
			temp2 = temp1;
			count++;
		}
	}
	
	var output = '<div>'+temp+'</div>';
	
	return output;
		
}
	

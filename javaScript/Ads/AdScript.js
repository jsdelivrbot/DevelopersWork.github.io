

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
	var fullBannerAd = [//'x=1'
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/468x60.png?2017-04-20.0" title="Shorte.st links, biggest payouts" width="468" height="60" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-468x60-2.gif" alt="Free Hosting" border="0" width="468" height="60" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-468x60-1.gif" alt="Free Hosting" border="0" width="468" height="60" /></a>'
		], 
	leaderboardAd = [//'x=2'
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/728x90.png?2017-04-20.0" title="Shorte.st links, biggest payouts. Join now" width="728" height="90" /></a> '
		,'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/350x19.png?2017-04-20.0" title="Share your links and earn real money" width="350" height="19" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-728x90-2.gif" alt="Free Hosting" border="0" width="728" height="90" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-728x90-1.gif" alt="Free Hosting" border="0" width="728" height="90" /></a>'
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=728x90" scrolling="no" border="0" marginwidth="0" style="border:none;" height="90" frameborder="0" width="728"></iframe>'
		],
	mediumRectangleAd = [//'x=3'
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/300x250.png?2017-04-20.0" title="Earn money on short links" width="300" height="250" /></a> ',
		AmazonHeadphones(3)
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-300x250-2.gif" alt="Free Hosting" border="0" width="300" height="250" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-300x250-1.gif" alt="Free Hosting" border="0" width="300" height="250" /></a>'
		,amazonSlideshowPCGames
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=300x250" scrolling="no" border="0" marginwidth="0" style="border:none;" height="250" frameborder="0" width="300"></iframe>',
		AmazonMobiles(3)
		], 
	squareAd = [//'x=4'
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/250x250_2.png?2017-04-20.0" title="Share your links over the internet and get paid" width="250" height="250"/></a>'
		,'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/125x125.png?2017-04-20.0" title="Earn on short links" width="125" height="125" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-125x125-powered-2.gif" alt="Free Hosting" border="0" width="125" height="125" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-125x125-powered-1.gif" alt="Free Hosting" border="0" width="125" height="125" /></a>'
		], 
	skyscraperAd = [//x=5
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/160x600.gif?2017-04-20.0" title="Share your links and earn" width="160" height="600" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-160x600-2.gif" alt="Free Hosting" border="0" width="160" height="600" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-160x600-1.gif" alt="Free Hosting" border="0" width="160" height="600" /></a>',
		AmazonMobiles(5)
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=160x600" scrolling="no" border="0" marginwidth="0" style="border:none;" height="600" frameborder="0" width="160"></iframe>',
		AmazonHeadphones(5)
		], 
	billBoardAd = [//'x=6'
		'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-600x400-1.gif" alt="Free Hosting" border="0" width="600" height="400" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-600x400-2.gif" alt="Free Hosting" border="0" width="600" height="400" /></a>',
		AmazonHeadphones(6)
		,'<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=developerswork-21&amp;c=100&amp;src=302&amp;sz=300x600" scrolling="no" border="0" marginwidth="0" style="border:none;" height="600" frameborder="0" width="300"></iframe>',
		AmazonMobiles(6)
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

function AmazonMobiles(x){
	
	var temp1,temp2=1111,temp3=2222;
	var temp,concatTemp,count;
	
	var amazonMobiles = [
		'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM8M0XE&asins=B01FM8M0XE&linkId=2fba6b377c5184db59fe99f6701d9598&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7JZME&asins=B01FM7JZME&linkId=c390a89c5928a6dfe50155abd3df5454&show_border=false&link_opens_in_new_window=true&price_color=fc0a0a&title_color=057a72&bg_color=ffffff"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7GIR4&asins=B01FM7GIR4&linkId=c9cd287b420edd517a2036cc2415cec9&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01LXMHNMQ&asins=B01LXMHNMQ&linkId=14eb8c234b2b4cc8be5eb4ed5bbeed25&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01MZ1FD81&asins=B01MZ1FD81&linkId=52b9b5d42b7532c1075a2c514e7d574f&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01NCN73TZ&asins=B01NCN73TZ&linkId=37facfe65748e67b651c93d53c148df7&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01N0SI0TB&asins=B01N0SI0TB&linkId=d5a1d494e0d531d50b87026a3e283018&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01N1TZ0NX&asins=B01N1TZ0NX&linkId=230751ad58e97c1d078688bdd0a19d61&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7H0K8&asins=B01FM7H0K8&linkId=c83e793a6b06bfd3ecbcf5340bf61445&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01NCN4ICO&asins=B01NCN4ICO&linkId=ad5404843436802666b5b32a84bb273e&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01DDP7D6W&asins=B01DDP7D6W&linkId=7d1f8eee52bfce5bebd54ff3111436aa&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7GGFI&asins=B01FM7GGFI&linkId=f2010d20aca6d25b90466056bbcf3a81&show_border=false&link_opens_in_new_window=true"></iframe>'
		];
	
	if(x==5){
		count=0;
		for(var i=0;count<4;i++){
			temp1 = Math.floor(Math.random()*amazonMobiles.length);
			if(temp1 != temp2 && temp1 != temp3 && temp2 != temp3){

				if(i==0)
					temp = amazonMobiles[temp1]+'<br>';
				else if(count>0 && count<3){
					temp += amazonMobiles[temp1]+'<br>';
					temp3 = temp2;
				}else 
					temp += amazonMobiles[temp1];
				temp2 = temp1;
				count++;
			}	
		}
	}
	if(x==3){
		count=0;
		for(var i=0;count<2;i++){
			temp1 = Math.floor(Math.random()*amazonMobiles.length);
			if(temp1 != temp2 && temp1 != temp3 && temp2 != temp3){

				if(i==0)
					temp = amazonMobiles[temp1];
				else 
					temp += amazonMobiles[temp1]+'<br>';
				temp2 = temp1;
				count++;
			}	
		}
	}
	if(x==6){
		count=0;
		for(var i=0;count<6;i++){
			temp1 = Math.floor(Math.random()*amazonMobiles.length);
			if(temp1 != temp2 && temp1 != temp3 && temp2 != temp3){

				if(i==0)
					temp = amazonMobiles[temp1];
				if(count==1 || count==3  || count==4){
					temp += amazonMobiles[temp1];
					temp3 = temp2;
				}if(count==5 || count==2){ 
					temp += amazonMobiles[temp1]+'<br>';
					temp3 = temp2;
				}
				temp2 = temp1;
				count++;
			}	
		}
	}
	
	var output = '<div>'+temp+'</div>';
	
	return output;
		
}

function AmazonHeadphones(x){
	
	var temp1,temp2=1111,temp3=2222;
	var temp,concatTemp,count;
	
	var amazonHeadphones = [
		'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01DEWVZ2C&asins=B01DEWVZ2C&linkId=e1fcc685b2f4e48a7e4f591d334a51c5&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01DEWVZ2C&asins=B01DEWVZ2C&linkId=e1fcc685b2f4e48a7e4f591d334a51c5&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01BY7ZMXC&asins=B01BY7ZMXC&linkId=4bd7fedc02a173c768826ee609ea7767&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B00K4AOF3Y&asins=B00K4AOF3Y&linkId=e1b8cca0de637c9abaa855777adda0d7&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B005HWEYN0&asins=B005HWEYN0&linkId=1df752b48d2242d450f336d85d83eaf7&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B00GNVVIVU&asins=B00GNVVIVU&linkId=9852a632bd32316b847022dde5093599&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B00G3P9UMU&asins=B00G3P9UMU&linkId=b6fb1d6dbbc073813737a94149b6bc0e&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01M7Q670L&asins=B01M7Q670L&linkId=add62b17c7f15c00c912b4727879c075&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01MQND40N&asins=B01MQND40N&linkId=15dcea69f965e67ed2298159d9024c25&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B06WGR9M7W&asins=B06WGR9M7W&linkId=c5efd71f909304c2ed3132404dba1f4b&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B019DUFVT2&asins=B019DUFVT2&linkId=8b8b6ce3d05859b5d3cfe73d3e2993e2&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B019XLFEDO&asins=B019XLFEDO&linkId=8b9ef89fae12cd8be6b9d9164b92f42a&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01KXQJB4Q&asins=B01KXQJB4Q&linkId=13801022cb74780227ce711103841bbc&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01MSYWV2F&asins=B01MSYWV2F&linkId=e1c33a7687721abccc22b1a21a0bb54d&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01MYSAKL9&asins=B01MYSAKL9&linkId=7141bc62253b054e9872cc2b810c1f4f&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01ISSFEFQ&asins=B01ISSFEFQ&linkId=dbd8e702ac0bf4c628c0c9a25cf25d3f&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01ISSFEDS&asins=B01ISSFEDS&linkId=db1b34eb36b525f74de02524bc10ef44&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01JUE04E8&asins=B01JUE04E8&linkId=84b173f37d8db1adcc7438a460ecc0d1&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B019N3I42U&asins=B019N3I42U&linkId=34dc60db003e44d4b1a9dac975f73b4b&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01G1Q0BTQ&asins=B01G1Q0BTQ&linkId=640e7d4507fcbcc8caca7ed6623c1dd2&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01569PRK2&asins=B01569PRK2&linkId=8c73ae66c19ebf27c1c48ec8a19570e0&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B001OTZ8DA&asins=B001OTZ8DA&linkId=e321c038363108b47ba7a769000e024e&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B00890YNBK&asins=B00890YNBK&linkId=7b0f02acb5ee9e13871e0bb2542f4826&show_border=false&link_opens_in_new_window=true"></iframe>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B008XEYT48&asins=B008XEYT48&linkId=e49d96781837a6752b5fdd3a8d8dfdde&show_border=false&link_opens_in_new_window=true"></iframe>'
		];
		
	if(x==5){
		count=0;
		for(var i=0;count<4;i++){
			temp1 = Math.floor(Math.random()*amazonHeadphones.length);
			if(temp1 != temp2 && temp1 != temp3 && temp2 != temp3){

				if(i==0)
					temp = amazonHeadphones[temp1]+'<br>';
				else if(count>0 && count<3){
					temp += amazonHeadphones[temp1]+'<br>';
					temp3 = temp2;
				}else 
					temp += amazonHeadphones[temp1];
				temp2 = temp1;
				count++;
			}	
		}
	}
	if(x==3){
		count=0;
		for(var i=0;count<2;i++){
			temp1 = Math.floor(Math.random()*amazonHeadphones.length);
			if(temp1 != temp2 && temp1 != temp3 && temp2 != temp3){

				if(i==0)
					temp = amazonHeadphones[temp1];
				else 
					temp += amazonHeadphones[temp1]+'<br>';
				temp2 = temp1;
				count++;
			}	
		}
	}
	if(x==6){
		count=0;
		for(var i=0;count<6;i++){
			temp1 = Math.floor(Math.random()*amazonHeadphones.length);
			if(temp1 != temp2 && temp1 != temp3 && temp2 != temp3){

				if(i==0)
					temp = amazonHeadphones[temp1];
				if(count==1 || count==3  || count==4){
					temp += amazonHeadphones[temp1];
					temp3 = temp2;
				}if(count==5 || count==2){ 
					temp += amazonHeadphones[temp1]+'<br>';
					temp3 = temp2;
				}
				temp2 = temp1;
				count++;
			}	
		}
	}
	
	var output = '<div>'+temp+'</div>';
	
	return output;
		
}
	

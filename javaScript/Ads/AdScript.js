
$(document).ready(function(){
	RandomiseAds();
});

function RandomiseAds(){
	var fullBanner468x60Ad = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/468x60.png?2017-04-20.0" title="Shorte.st links, biggest payouts" width="468" height="60" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-468x60-2.gif" alt="Free Hosting" border="0" width="468" height="60" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-468x60-1.gif" alt="Free Hosting" border="0" width="468" height="60" /></a>'
		], 
	leaderboard728x90Ad = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/728x90.png?2017-04-20.0" title="Shorte.st links, biggest payouts. Join now" width="728" height="90" /></a> '
		,'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/350x19.png?2017-04-20.0" title="Share your links and earn real money" width="350" height="19" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-728x90-2.gif" alt="Free Hosting" border="0" width="728" height="90" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-728x90-1.gif" alt="Free Hosting" border="0" width="728" height="90" /></a>'
		],
	mediumRectangle336x280Ad = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/300x250.png?2017-04-20.0" title="Earn money on short links" width="300" height="250" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-300x250-2.gif" alt="Free Hosting" border="0" width="300" height="250" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-300x250-1.gif" alt="Free Hosting" border="0" width="300" height="250" /></a>'
		,'<script type="text/javascript" language="javascript">var aax_size="300x250";var aax_pubname = "develwork-21";var aax_src="302";</script>'
		], 
	square250x250Ad = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/250x250_2.png?2017-04-20.0" title="Share your links over the internet and get paid" width="250" height="250"/></a>'
		,'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/125x125.png?2017-04-20.0" title="Earn on short links" width="125" height="125" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-125x125-powered-2.gif" alt="Free Hosting" border="0" width="125" height="125" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-125x125-powered-1.gif" alt="Free Hosting" border="0" width="125" height="125" /></a>'
		], 
	skyscraper160x600Ad = [
		'<a href="http://join-shortest.com/ref/8011e399d9"><img src="https://static.shorte.st/bundles/smeuser/img/referral_banners/160x600.gif?2017-04-20.0" title="Share your links and earn" width="160" height="600" /></a> '
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-160x600-2.gif" alt="Free Hosting" border="0" width="160" height="600" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-160x600-1.gif" alt="Free Hosting" border="0" width="160" height="600" /></a>'
		,'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7JCWW&asins=B01FM7JCWW&linkId=715f90fae6039c1cdfec265c6331109f&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066C0&bg_color=FFFFFF"></iframe><br><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01FM7GIR4&asins=B01FM7GIR4&linkId=8aee4dc0c91895574156b22ec20f11af&show_border=false&link_opens_in_new_window=true&price_color=fc0a0a&title_color=057a72&bg_color=ffffff"></iframe><br><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=developerswork-21&marketplace=amazon&region=IN&placement=B01LXASAI9&asins=B01LXASAI9&linkId=968feefb9c6566ebc758d2aeeea59baf&show_border=false&link_opens_in_new_window=true&price_color=fc0a0a&title_color=057a72&bg_color=ffffff"></iframe>'
		], 
	billBoard970x250Ad = [
		'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-600x400-1.gif" alt="Free Hosting" border="0" width="600" height="400" /></a>'
		,'<a href="http://api.hostinger.in/redir/17850336" target="_blank"><img src="http://www.hostinger.in/banners/en/hostinger-600x400-2.gif" alt="Free Hosting" border="0" width="600" height="400" /></a>'
		];
	
	var fullBanner = fullBanner468x60Ad[Math.floor(Math.random()*fullBanner468x60Ad.length)],
	leaderboard = leaderboard728x90Ad[Math.floor(Math.random()*leaderboard728x90Ad.length)],
	mediumRectangle = mediumRectangle336x280Ad[Math.floor(Math.random()*mediumRectangle336x280Ad.length)],
	square = square250x250Ad[Math.floor(Math.random()*square250x250Ad.length)],
	skyscraper = skyscraper160x600Ad[Math.floor(Math.random()*skyscraper160x600Ad.length)],
	billBoard = billBoard970x250Ad[Math.floor(Math.random()*billBoard970x250Ad.length)];
	
	setTimeout(function(){
		document.getElementById('fullBanner468x60Ad').innerHTML = fullBanner;
		document.getElementById('leaderboard728x90Ad').innerHTML = leaderboard;
		document.getElementById('mediumRectangle336x280Ad').innerHTML = mediumRectangle;
		document.getElementById('square250x250Ad').innerHTML = square;
		document.getElementById('skyscraper160x600Ad').innerHTML = skyscraper;
		document.getElementById('billBoard970x250Ad').innerHTML = billBoard;
	},2000);
}

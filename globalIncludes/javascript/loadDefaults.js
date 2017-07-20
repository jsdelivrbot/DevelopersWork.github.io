(function(){
	$('.scriptsLoad').append('<script src="https://rawgit.com/DevelopersWork/Website-Modules/Pre-Builts/NavBar/script.js"></script>');
	//$('#navigationBar').load("https://rawgit.com/DevelopersWork/Website-Modules/Pre-Builts/NavBar/index.html");
	$('#footerLinks').html('\
		<div class="col-md-12 col-sm-12"><br><br><br>\
				<iframe src="https://rawgit.com/DevelopersWork/Website-Modules/Pre-Builts/FooterLinks/index.html" width="100%" scrolling="no" style="margin:0;border:0;padding:0;"></iframe>\
		</div>');
	$('#navigationBar').html('\
		<div>\
				<iframe src="https://rawgit.com/DevelopersWork/Website-Modules/Pre-Builts/NavBar/index.html" width="100%" scrolling="no" style="margin:0;border:0;padding:0;"></iframe>\
		</div>');
})();
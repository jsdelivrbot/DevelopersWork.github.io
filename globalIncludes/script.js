$(document).ready(function(){
	
    setTimeout(function(){
		var width = screen.width,height = screen.height;
		while(width>=16 && height>=9){
			width=width/(16*16);
			height=height/(9*16);
			if(width != 5 && height != 5){
				alert('This Page is Optimized for 16:9 Resolution. So,this page may not be working at best now');
			}
		}
    },500);
	
	setTimeout(function(){
		$("#loader").fadeOut("slow");
	},5000);
	
	setTimeout(function() {
        $("#navigationBar").show('fadeIn',{},500)
    },5000);
	
	$('.dropdown-submenu a.test').on("click", function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
	
});
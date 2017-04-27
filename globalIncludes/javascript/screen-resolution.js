
$(document).ready(function(){
	
    setTimeout(function(){
		var width = screen.width,height = screen.height;
		while(width>=16 && height>=9){
			width=width/(16*16);
			height=height/(9*16);
			if(width != 5 && height != 5){
				alert('This Page is Optimized for 1280x720 Resolution. So, the Page may not viewed as Designed');
			}
		}
    },500);
	
});
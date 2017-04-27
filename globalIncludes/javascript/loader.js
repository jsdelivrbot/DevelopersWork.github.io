

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("pageBody").style.display = "block";
}

$(document).ready(function(){
	
	setTimeout(showPage,5000);
	
});
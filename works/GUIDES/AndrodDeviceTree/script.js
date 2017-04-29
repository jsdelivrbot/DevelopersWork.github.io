var count=1;

function showhide(id){
	var e = document.getElementById(id);

	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
	if(count==1){
		document.getElementById('button'+id).innerHTML = '<button>Show</button>';
		count=2;
	}
	else{
		document.getElementById('button'+id).innerHTML = '<button>Hide</button>';
		count=1;
	}
}


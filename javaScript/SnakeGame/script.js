var x = 200;
var y = 200;

function startGame(){
	setup();
}

function setup(){
	draw.start();
}

var draw = {
	canvas : document.createElement("canvas"),
	start : function(){
		this.canvas.width = x;
		this.canvas.height = y;
		this.context = this.canvas.getContext("2d");
	},
	stop : function(){
		
	}
}















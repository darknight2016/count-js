var CANVAS_WIDTH = 330;
var CANVAS_HEIGHT = 768;
var RADIUS = 8;
var colors = [
	'red','blue','green','yellow','#888'
]
var canvas = document.getElementById('count');
var context = canvas.getContext('2d');

var x = 9;



function random(x,y){
	var max = Math.max(x,y);
	var min = Math.min(x,y);
	var diff = max - min;
	var _num = Math.floor(Math.random()*diff) + min;

	return _num;
}

function renderDigit(x,y,num,ctx){
	var _num = digit[num];
	// ctx.fillStyle = 'blue';

	for(var i = 0;i < 10;i++){
		for(var j = 0;j < 7;j++){
			if(_num[i][j] == 1){
				// var _x = random(0,4);
				// console.log(_x);
				ctx.fillStyle = colors[random(0,4)];
				// console.log(ctx.fillStyle);
				ctx.beginPath();
				ctx.arc(x + j*2*(RADIUS + 1) + RADIUS + 1,y + i*2*(RADIUS + 1) + RADIUS + 1,RADIUS,0,2*Math.PI);
				ctx.fill();
			}
		}
	}
}
// 本打算用闭包
function count(){
	var x = 9;		

	function countDown(){
		context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
		renderDigit(100,100,x,context);
		x = x - 1;
		console.log(x);
		if (x > 0) {
			setTimeout('countDown()',1000);
		}
		if (x == 0) {
			document.getElementById('mask').style.display = 'none';
		}
		// countDown();

	}
	return countDown;	
}

function countDown(){
	context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	renderDigit(100,100,x,context);
	x = x - 1;
	console.log(x);
	if (x > -1) {
		setTimeout('countDown()',1000);
	}
	// countDown();

}

window.onload = function(){
	var canvas = document.getElementById('count');
	var context = canvas.getContext('2d');

	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	// renderDigit(100,100,3,context);
	countDown();
	
}
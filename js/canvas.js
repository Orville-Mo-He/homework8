// Variables!
// var x = 50;
// var y =150;
// I would add more variables for x, y, radius, and color
var radius = 5;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");
let ww;
let wh;
let drau = true;


//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)


window.addEventListener("load", function(){
	colorPicker.defaultValue = '#CC0000';
	picked_color = colorPicker.value;
	ww = innerWidth;
	wh = innerHeight;
	canvas.width = ww*.75;
	canvas.height = wh*.75;
	console.log(wh/innerHeight)
})
window.addEventListener('resize', function(){
	ww = innerWidth;
	wh = innerHeight;
	canvas.width = ww*.75;
	canvas.height = wh*.75;
	ctx.clearRect(0, 0, ww*.75, wh*.75);
});

colorPicker.addEventListener('input', function(){picked_color = colorPicker.value})

canvas.addEventListener('mousemove', function(e){
	// console.log(this);
	// console.log(e)
	let x = e.clientX;
	let y = e.clientY;
	if (drau){
		draw(x, y, picked_color);
	}
	else{};
});



//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	// console.log(this);
	// console.log(e);
	if (e.key =='r'){
		colorPicker.value = '#CC0000';
	};
	if (e.key =='g'){
		colorPicker.value = '#009933';
	};
	if (e.key =='b'){
		colorPicker.value = '#003399';
	};
	if (e.key =='y'){
		colorPicker.value = '#FFFF00';
	};
	picked_color = colorPicker.value;


	if (e.key ==' '){
		ctx.clearRect(0, 0, ww*.75, wh*.75);
	};

	if(e.key == "ArrowUp"){
		drau = false;
	};
	if(e.key == "ArrowDown"){
		drau = true;
	};


});

// Functions!
// I would add a function for draw
function draw(mousex, mousey, p_color){

	c = p_color;
	// console.log(c)
	// console.log(picked_color)

	ctx.fillStyle = c;
	ctx.fill();
	ctx.beginPath();
	ctx.arc(mousex, mousey, radius, 0, 2 * Math.PI);
	console.log("I am going to draw!!");
};


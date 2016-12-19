var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: true
});

var numShapes = 4;
var sides = 4;
var radius = r.width/4;
var rotation = 10;
var stroke = 5;


function draw() {
	r.stage.children = [];

	for(var i = 0; i < numShapes; i++)
		drawShape(sides, radius, rotation * i);

	text();
	r.draw();
}

function drawShape(sides, radius, rotation) {
	var path = r.path(r.width / 2, r.height / 2)
		.moveTo(radius, 0);

	for(var i = 1; i <= sides; i++)
		path.lineTo(Math.cos(Rune.radians(i * 360 / sides)) * radius, Math.sin(Rune.radians(i * 360 / sides)) * radius);

	path.closePath()
		.fill(false)
		.strokeWidth(stroke)
		.rotate(rotation, r.width / 2, r.height / 2);
}

function addSide() {
	sides++;
	draw();
}

function removeSide() {
	if(sides > 2)
		sides--;
	draw();
}

function increaseRotation() {
	rotation += 5;
	draw();
}

function decreaseRotation() {
	rotation -= 5;
	draw();
}

function addShape() {
	numShapes++;
	draw();
}

function removeShape() {
	if(numShapes > 1)
		numShapes--;
	draw();
}

function increaseStroke() {
	stroke++;
	draw();
}

function decreaseStroke() {
	if(stroke > 1)
		stroke--;
	draw();
}

function text() {
	document.getElementById("numShapes").innerHTML = numShapes + " Shapes";
	document.getElementById("numSides").innerHTML = sides + " Sides";
	document.getElementById("numRot").innerHTML = "Rotation is " + rotation + "&deg";
	document.getElementById("stroke").innerHTML = "Stroke is " + stroke;
}

function download() {
	var e = document.createElement('script');
	e.setAttribute('src', 'https://nytimes.github.io/svg-crowbar/svg-crowbar.js');
	e.setAttribute('class', 'svg-crowbar');
	document.body.appendChild(e);
}
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  debug: true
});

var shiftX = 150;
var shiftY = 200;

var count = 5;
var width = 5

function draw() {
	r.stage.children = [];

	for(var i = 0; i < count; i++)
		t(300, 200, i*360/count);
	
	text();
	r.draw();
}

function t(topX, topY, rotation) {
	centerY = topY + shiftY/2;
	var tri = r.triangle(topX, topY, topX+shiftX, topY+shiftY, topX-shiftX, topY+shiftY)
		.fill(false)
		.stroke(0, 0, 0)
		.strokeWidth(width)
		.rotate(rotation, topX, centerY);
}

function addTriangle() {
	count++;
	draw();
}

function removeTriangle() {
	if(count > 0)
		count--;
	draw();
}

function increaseWidth() {
	shiftX += 10;
	draw();
}

function decreaseWidth() {
	if(shiftX > 10)
		shiftX -= 10;
	draw();
}

function increaseStroke() {
	width += 1;
	draw();
}

function decreaseStroke() {
	if(width > 1)
		width -= 1;
	draw();
}

function text() {
	document.getElementById("numTris").innerHTML = count + " Triangles";
	document.getElementById("baseWidth").innerHTML = "Base width is " + shiftX;
	document.getElementById("strokeWidth").innerHTML = "Stroke width is " + width;
}

function download() {
	var e = document.createElement('script');
	e.setAttribute('src', 'https://nytimes.github.io/svg-crowbar/svg-crowbar.js');
	e.setAttribute('class', 'svg-crowbar');
	document.body.appendChild(e);
}
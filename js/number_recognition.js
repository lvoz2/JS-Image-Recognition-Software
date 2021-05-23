window.a;
window.count = 0;
window.targetx = 'This configuration is incorrect. Please try again';
window.targety = 'This configuration is incorrect. Please try again';
window.y = [];
window.x = [];
window.tlx = [];
window.tly = [];
window.outputx = [];
window.outputy = [];
window.xvalues = {
	'0': {one: [0,+1,+2,0,+2,0,+2,0,+1,+2],
	       two: [0,-1,+1,-1,+1,0]},
	'1': {one: [0,+1,+1,+1,0,+1,+2]},
	'2': {one: [0,+1,+2,+2,0,+1,+2,0,0,+1,+2]},
	'3': {one: [0,+1,+2,+2,0,+1,+2,+2,0,+1,+2]},
	'4': {one: [0,+2,0,+2,0,+1,+2,+3,+2]},
	'5': {one: [0,+1,+2,0,0,+1,+2,+2,0,+1,+2]},
	'6': {one: [0,+1,+2,0,0,+1,+2,0,+2,0,+1,+2]},
	'7': {one: [0,+1,+2,+2,+1,+1]},
	'8': {one: [0,+1,+2,0,+2,0,+1,+2,0,+2,0,+1,+2]},
	'9': {one: [0,+1,+2,0,+2,0,+1,+2,+2,0,+1,+2]}};
window.yvalues = {
	'0': {one: [0,0,0,+1,+1,+2,+2,+3,+3,+3],
	       two: [0,+1,+1,+2,+2,+3]},
	'1': {one: [0,0,+1,+2,+3,+3,+3]},
	'2': {one: [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4]},
	'3': {one: [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4]},
	'4': {one: [0,0,+1,+1,+2,+2,+2,+2,+3]},
	'5': {one: [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4]},
	'6': {one: [0,0,0,+1,+2,+2,+2,+3,+3,+4,+4,+4]},
	'7': {one: [0,0,0,+1,+2,+3]},
	'8': {one: [0,0,0,+1,+1,+2,+2,+2,+3,+3,+4,+4,+4]},
	'9': {one: [0,0,0,+1,+1,+2,+2,+2,+3,+4,+4,+4]}};
function createnewdataset() {
	tlx = [];
	tly = [];
	x = [];
	y = [];
	window.valuesx = [];
	window.valuesy = [];
	window.row = 0;
	window.column = 0;
	for (row = 0; row <= 9; row++) {
		for (column = 0; column <= 9; column++) {
			var id = "T1R" + (row + 1) + "C" + (column + 1);
			a = document.getElementById(id).attributes[1].value;
			if (a === "background-color: #000000") {
				x.push(column + 1);
				y.push(row + 1);
			}
		}
	}
	tlx.push(x[0]);
	tly.push(y[0]);
	for (var j = 0; j < x.length; j++) {
		valuesx.push(x[j] - tlx[0])
	}
	for (var j = 0; j < y.length; j++) {
		valuesy.push(y[j] - tly[0])
	}
}
function reset() {
	for (var i = 0; i < 10; i++) {
		for (var g = 0; g < 10; g++) {
			var id = "T1R" + (i + 1) + "C" + (g + 1);
			document.getElementById(id).attributes[1].value = "background-color: #FFFFFF";
			document.getElementById("output").innerHTML = '';
		}
	}
}
function swapBColour(id) {
	var color = document.getElementById(id).attributes[1].value;
	if ((color === "background-color: #FFFFFF") || (color === "")) {
		document.getElementById(id).attributes[1].value = "background-color: #000000";
	}
	if (color === "background-color: #000000") {
		document.getElementById(id).attributes[1].value = "background-color: #FFFFFF";
	}
}
function idofui() {
	tlx = [];
	tly = [];
	x = [];
	y = [];
	outputx = [];
	outputy = [];
	targetx = 'This configuration is incorrect. Please try again';
	targety = 'This configuration is incorrect. Please try again';
	window.row = 0;
	window.column = 0;
	for (row = 0; row <= 9; row++) {
		for (column = 0; column <= 9; column++) {
			var id = "T1R" + (row + 1) + "C" + (column + 1);
			a = document.getElementById(id).attributes[1].value;
			if (a === "background-color: #000000") {
				x.push(column + 1);
				y.push(row + 1);
			}
		}
	}
	tlx.push(x[0]);
	tly.push(y[0]);
	outputx = [];
	outputy = [];
	window.c = '';
	for (b in xvalues) {
		for (c in xvalues[b]) {
			outputx = [];
			outputy = [];
			for (var i = 0; i < yvalues[b][c].length; i++) {
				count = 0;
				outputx.push(parseInt(tlx[0]) + xvalues[b][c][i]);
				for (var h = 0; h < x.length; h++) {
					if (outputx[h] === x[h]) {
						count++
					}
				}
				if (count == xvalues[b][c].length) {
					targetx = b;
				}
				count = 0;
				outputy.push(parseInt(tly[0]) + yvalues[b][c][i]);
				for (var h = 0; h < y.length; h++) {
					if (outputy[h] === y[h]) {
						count++
					}
				}
				if (count == yvalues[b][c].length) {
					targety = b;
				}
			}
			if ((targetx === targety) && (targetx === b)) {
				document.getElementById("output").innerHTML = 'Your number is: ' + b;
			}
		}
		if (targetx === 'This configuration is incorrect. Please try again' || targety === 'This configuration is incorrect. Please try again') {
			document.getElementById("output").innerHTML = 'This configuration is incorrect. Please try again';
		}
	}
}
// Start of code that was taken from external sources and wasn't developed by me
var openFile = function(file) {
	window.input = file.target;
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		var output = document.getElementById('user_image');
		output.src = dataURL;
		window.width = document.getElementById("user_image").width;
		window.height = document.getElementById("user_image").height;
	};
	reader.readAsDataURL(input.files[0]);
};
function getImageData() {
	var c = document.getElementById("user_canvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("user_image");
	c.width = width;
	c.height = height;
	ctx.drawImage(img, 0, 0);
	window.imgData = ctx.getImageData(0, 0, c.width, c.height);
}

window.hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
window.a;
window.targetx = 0;
window.targety = 0;
window.y = [];
window.x = [];
window.tlx = [];
window.tly = [];
window.count = 0;
window.outputx = [];
window.outputy = [];
window.zerox = [0,+1,+2,0,+2,0,+2,0,+1,+2];
window.onex = [0,+1,+1,+1,0,+1,+2];
window.twox = [0,+1,+2,+2,0,+1,+2,0,0,+1,+2];
window.threex = [0,+1,+2,+2,0,+1,+2,+2,0,+1,+2];
window.fourx = [0,+2,0,+2,0,+1,+2,+3,+2];
window.fivex = [0,+1,+2,0,0,+1,+2,+2,0,+1,+2];
window.sixx = [0,+1,+2,0,0,+1,+2,0,+2,0,+1,+2];
window.sevenx = [0,+1,+2,+2,+1,+1];
window.eightx = [0,+1,+2,0,+2,0,+1,+2,0,+2,0,+1,+2];
window.ninex = [0,+1,+2,0,+2,0,+1,+2,+2,0,+1,+2];
window.zeroy = [0,0,0,+1,+1,+2,+2,+3,+3,+3];
window.oney = [0,0,+1,+2,+3,+3,+3];
window.twoy = [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4];
window.threey = [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4];
window.foury = [0,0,+1,+1,+2,+2,+2,+2,+3];
window.fivey = [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4];
window.sixy = [0,0,0,+1,+2,+2,+2,+3,+3,+4,+4,+4];
window.seveny = [0,0,0,+1,+2,+3];
window.eighty = [0,0,0,+1,+1,+2,+2,+2,+3,+3,+4,+4,+4];
window.niney = [0,0,0,+1,+1,+2,+2,+2,+3,+4,+4,+4];
function createNew10x10() {
	var row;
	var column;
	for (row = 0; row <= 9; row++) {
		for (column = 0; column <= 9; column++) {
			var id = "T1R" + (row + 1) + "C" + (column + 1);
			document.getElementById(id).attributes[1].value = "background-color: #" + hexvalues[Math.floor(Math.random() * 16)] + hexvalues[Math.floor(Math.random() * 16)] + hexvalues[Math.floor(Math.random() * 16)] + hexvalues[Math.floor(Math.random() * 16)] + hexvalues[Math.floor(Math.random() * 16)] + hexvalues[Math.floor(Math.random() * 16)];
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
	targetx = 0;
	targety = 0;
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
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + zerox[i])
		if (outputx === x) {
			targetx = 0;
		}
		outputy.push(parseInt(tly[0]) + zeroy[i])
		if (outputy === y) {
			targety = 0;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + onex[i])
		if (outputx === x) {
			targetx = 1;
		}
		outputy.push(parseInt(tly[0]) + oney[i])
		if (outputy === y) {
			targety = 1;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + twox[i])
		if (outputx === x) {
			targetx = 2;
		}
		outputy.push(parseInt(tly[0]) + twoy[i])
		if (outputy === y) {
			targety = 2;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + threex[i])
		if (outputx === x) {
			targetx = 3;
		}
		outputy.push(parseInt(tly[0]) + threey[i])
		if (outputy === y) {
			targety = 3;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + fourx[i])
		if (outputx === x) {
			targetx = 4;
		}
		outputy.push(parseInt(tly[0]) + foury[i])
		if (outputy === y) {
			targety = 4;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + fivex[i])
		if (outputx === x) {
			targetx = 5;
		}
		outputy.push(parseInt(tly[0]) + fivey[i])
		if (outputy === y) {
			targety = 5;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + sixx[i])
		if (outputx === x) {
			targetx = 6;
		}
		outputy.push(parseInt(tly[0]) + sixy[i])
		if (outputy === y) {
			targety = 6;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + sevenx[i])
		if (outputx === x) {
			targetx = 7;
		}
		outputy.push(parseInt(tly[0]) + seveny[i])
		if (outputy === y) {
			targety = 7;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + eightx[i])
		if (outputx === x) {
			targetx = 8;
		}
		outputy.push(parseInt(tly[0]) + eighty[i])
		if (outputy === y) {
			targety = 8;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	count = 0;
	for (var i = 0; i < y.length; i++) {
		outputx.push(parseInt(tlx[0]) + ninex[i])
		if (outputx === x) {
			targetx = 9;
		}
		outputy.push(parseInt(tly[0]) + niney[i])
		if (outputy === y) {
			targety = 9;
		}
		for (var h = 0; h < y.length; h++) {
			if (targetx[h] === targety[h]) {
				count++
			}
		}
		if (count == y.length) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
}

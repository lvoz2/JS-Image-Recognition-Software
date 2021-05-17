window.hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
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
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + zerox[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 0;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + zeroy[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 0;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + onex[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 1;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + oney[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 1;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + twox[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 2;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + twoy[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 2;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + threex[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 3;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + threey[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 3;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + fourx[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 4;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + foury[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 4;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + fivex[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 5;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + fivey[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 5;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + sixx[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 6;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + sixy[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 6;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + sevenx[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 7;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + seveny[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 7;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + eightx[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 8;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + eighty[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 8;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	outputx = [];
	outputy = [];
	for (var i = 0; i < y.length; i++) {
		count = 0;
		outputx.push(parseInt(tlx[0]) + ninex[i])
		for (var h = 0; h < x.length; h++) {
			if (outputx[h] === x[h]) {
				count++
			}
		}
		if (count == x.length) {
			targetx = 9;
		}
		count = 0;
		outputy.push(parseInt(tly[0]) + niney[i])
		for (var h = 0; h < y.length; h++) {
			if (outputy[h] === y[h]) {
				count++
			}
		}
		if (count == y.length) {
			targety = 9;
		}
		if (targetx === targety) {
			document.getElementById("output").innerHTML = 'Your number is: ' + targetx;
		}
	}
	if (targetx === 'This configuration is incorrect. Please try again') {
		if (targety === 'This configuration is incorrect. Please try again') {
			document.getElementById("output").innerHTML = 'This configuration is incorrect. Please try again';
		}
	}
}

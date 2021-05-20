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
window.zerox = {one: [0,+1,+2,0,+2,0,+2,0,+1,+2],
	       two: [0,-1,+1,-1,+1,0]};
window.onex = {one: [0,+1,+1,+1,0,+1,+2]};
window.twox = {one: [0,+1,+2,+2,0,+1,+2,0,0,+1,+2]};
window.threex = {one: [0,+1,+2,+2,0,+1,+2,+2,0,+1,+2]};
window.fourx = {one: [0,+2,0,+2,0,+1,+2,+3,+2]};
window.fivex = {one: [0,+1,+2,0,0,+1,+2,+2,0,+1,+2]};
window.sixx = {one: [0,+1,+2,0,0,+1,+2,0,+2,0,+1,+2]};
window.sevenx = {one: [0,+1,+2,+2,+1,+1]};
window.eightx = {one: [0,+1,+2,0,+2,0,+1,+2,0,+2,0,+1,+2]};
window.ninex = {one: [0,+1,+2,0,+2,0,+1,+2,+2,0,+1,+2]};
window.zeroy = {one: [0,0,0,+1,+1,+2,+2,+3,+3,+3],
	       two: [0,+1,+1,+2,+2,+3]};
window.oney = {one: [0,0,+1,+2,+3,+3,+3]};
window.twoy = {one: [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4]};
window.threey = {one: [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4]};
window.foury = {one: [0,0,+1,+1,+2,+2,+2,+2,+3]};
window.fivey = {one: [0,0,0,+1,+2,+2,+2,+3,+4,+4,+4]};
window.sixy = {one: [0,0,0,+1,+2,+2,+2,+3,+3,+4,+4,+4]};
window.seveny = {one: [0,0,0,+1,+2,+3]};
window.eighty = {one: [0,0,0,+1,+1,+2,+2,+2,+3,+3,+4,+4,+4]};
window.niney = {one: [0,0,0,+1,+1,+2,+2,+2,+3,+4,+4,+4]};
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
	for (c in zerox) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < zeroy[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + zerox[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == zerox[c].length) {
				targetx = 0;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + zeroy[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == zeroy[c].length) {
				targety = 0;
			}
		}
		if ((targetx === targety) && (targetx === 0)) {
			document.getElementById("output").innerHTML = 'Your number is: 0';
		}
	}
	outputx = [];
	outputy = [];
	for (c in onex) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < oney[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + onex[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == onex[c].length) {
				targetx = 1;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + oney[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == oney[c].length) {
				targety = 1;
			}
		}
		if ((targetx === targety) && (targetx === 1)) {
			document.getElementById("output").innerHTML = 'Your number is: 1';
		}
	}
	outputx = [];
	outputy = [];
	for (c in twox) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < twoy[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + twox[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == twox[c].length) {
				targetx = 2;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + twoy[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == twoy[c].length) {
				targety = 2;
			}
		}
		if ((targetx === targety) && (targetx === 2)) {
			document.getElementById("output").innerHTML = 'Your number is: 2';
		}
	}
	outputx = [];
	outputy = [];
	for (c in threex) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < threey[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + threex[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == threex[c].length) {
				targetx = 3;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + threey[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == threey[c].length) {
				targety = 3;
			}
		}
		if ((targetx === targety) && (targetx === 3)) {
			document.getElementById("output").innerHTML = 'Your number is: 3';
		}
	}
	outputx = [];
	outputy = [];
	for (c in fourx) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < foury[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + fourx[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == fourx[c].length) {
				targetx = 4;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + foury[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == foury[c].length) {
				targety = 4;
			}
		}
		if ((targetx === targety) && (targetx === 4)) {
			document.getElementById("output").innerHTML = 'Your number is: 4';
		}
	}
	outputx = [];
	outputy = [];
	for (c in fivex) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < fivey[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + fivex[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == fivex[c].length) {
				targetx = 5;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + fivey[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == fivey[c].length) {
				targety = 5;
			}
		}
		if ((targetx === targety) && (targetx === 5)) {
			document.getElementById("output").innerHTML = 'Your number is: 5';
		}
	}
	outputx = [];
	outputy = [];
	for (c in sixx) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < sixy[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + sixx[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == sixx[c].length) {
				targetx = 6;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + sixy[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == sixy[c].length) {
				targety = 6;
			}
		}
		if ((targetx === targety) && (targetx === 6)) {
			document.getElementById("output").innerHTML = 'Your number is: 6';
		}
	}
	outputx = [];
	outputy = [];
	for (c in sevenx) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < seveny[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + sevenx[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == sevenx[c].length) {
				targetx = 7;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + seveny[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == seveny[c].length) {
				targety = 7;
			}
		}
		if ((targetx === targety) && (targetx === 7)) {
			document.getElementById("output").innerHTML = 'Your number is: 7';
		}
	}
	outputx = [];
	outputy = [];
	for (c in eightx) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < eighty[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + eightx[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == eightx[c].length) {
				targetx = 8;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + eighty[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == eighty[c].length) {
				targety = 8;
			}
		}
		if ((targetx === targety) && (targetx === 8)) {
			document.getElementById("output").innerHTML = 'Your number is: 8';
		}
	}
	outputx = [];
	outputy = [];
	for (c in ninex) {
		outputx = [];
		outputy = [];
		for (var i = 0; i < niney[c].length; i++) {
			count = 0;
			outputx.push(parseInt(tlx[0]) + ninex[c][i]);
			for (var h = 0; h < x.length; h++) {
				if (outputx[h] === x[h]) {
					count++
				}
			}
			if (count == ninex[c].length) {
				targetx = 9;
			}
			count = 0;
			outputy.push(parseInt(tly[0]) + niney[c][i]);
			for (var h = 0; h < y.length; h++) {
				if (outputy[h] === y[h]) {
					count++
				}
			}
			if (count == niney[c].length) {
				targety = 9;
			}
		}
		if ((targetx === targety) && (targetx === 9)) {
			document.getElementById("output").innerHTML = 'Your number is: 9';
		}
	}
	if (targetx === 'This configuration is incorrect. Please try again' || targety === 'This configuration is incorrect. Please try again') {
		document.getElementById("output").innerHTML = 'This configuration is incorrect. Please try again';
	}
}

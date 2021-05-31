window.a;
window.count = 0;
window.targetx = 'This configuration is incorrect. Please try again';
window.targety = 'This configuration is incorrect. Please try again';
window.y = [];
window.x = [];
window.imgData = [];
window.tlx = [];
window.tly = [];
window.outputx = [];
window.outputy = [];
window.octokit = new Octokit({ auth: `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`});
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
function convertImgData() {
	window.newImgData = [];
	window.formImgData = [];
	for (i = 0; i < imgData.data.length; i += 4) {
		k = [];
		k.push(imgData.data[i]);
		k.push(imgData.data[i + 1]);
		k.push(imgData.data[i + 2]);
		k.push(imgData.data[i + 3]);
		newImgData.push(k);
	}
	for (i = 0; i < newImgData.length; i += height) {
		k = [];
		for (d = 0; d < height; d++) {
			k.push(newImgData[i + d]);
		}
		formImgData.push(k);
	}
}
async function sendNewData() {
	await octokit.request('PUT /repos/lvoz2/JS-Image-Recognition-Software/contents/{path}', {
		owner: 'lvoz2',
		repo: 'JS-Image-Recognition-Software',
		path: '',
		message: 'Add new data',
		content: 'content'
	})
}

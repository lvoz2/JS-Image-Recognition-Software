window.hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
window.a;
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
	x = [];
	y = [];
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
	
}

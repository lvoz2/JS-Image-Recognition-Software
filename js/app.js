window.hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
window.a = " ";
window.b;
window.c;
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
	window.row = 0;
	window.column = 0;
	var id1 = "T1R1C1";
	for (row = 0; row <= 9; row++) {
		if (row != 0) {
			id1 = "T1R" + row + "C" + (column + 1);
		}
		if (id1 == "T1R" + row + "C11") {
			id1 = "T1R" + row + "C" + column
		}
		c = document.getElementById(id1).attributes[1].value;
		for (column = 0; column <= 9; column++) {
			var id2 = "T1R" + (row + 1) + "C" + (column + 1);
			if (a != " ") {
				b = a;
			}
			a = document.getElementById(id2).attributes[1].value;
		}
	}
}

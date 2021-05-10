window.hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
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

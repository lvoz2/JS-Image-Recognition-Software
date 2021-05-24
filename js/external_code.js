// This is the location for external js code that was taken from external sources and wasn't developed by me
var openFile = function(file) {
	window.input = file.target;
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		var output = document.getElementById('user_image');
		output.onload = function() {
			// access image size here 
			console.log(this.width);
		};
		output.src = dataURL;
		window.width = output.width;
		window.height = output.height;
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

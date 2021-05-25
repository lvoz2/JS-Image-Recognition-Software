// This is the location for external js code that was taken from external sources and wasn't developed by me
var openFile = function(file) {
	window.input = file.target;
	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		var output = document.getElementById('user_image');
		output.onload = function() {
			window.width = this.width;
			window.height = this.height;
			var c = document.getElementById("user_canvas");
			var ctx = c.getContext("2d");
			var img = document.getElementById("user_image");
			c.width = width;
			c.height = height;
			ctx.drawImage(img, 0, 0);
			window.imgData = ctx.getImageData(0, 0, c.width, c.height);
			convertImgData()
		};
		output.src = dataURL;
	};
	reader.readAsDataURL(input.files[0]);
}

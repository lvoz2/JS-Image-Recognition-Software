function createscript1() {
	var script1 = document.createElement('script')
	script1.src = './js/number_recognition.js'
	script1.onload = function(){createscript2()}
	document.head.appendChild(script1)
}
function createscript2() {
	var script2 = document.createElement('script')
	script2.src = './js/external_code.js'
	script2.onload = function(){createscript3()}
	document.head.appendChild(script2)
}
function createscript3() {
	var script3 = document.createElement('script')
	script3.src = './js/values.js'
	document.head.appendChild(script3)
}
createscript1()

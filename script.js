let regionElement = document.getElementById('continent');
let cityElement = document.getElementById('city');

async function getCities() {
	
	let url = "http://uyar.pythonanywhere.com/cities?region=" + regionElement.value;
	
	let response = await fetch(url);
	
	let result = await response.text();
	
	cityElement.innerHTML = result;
	cityElement.disabled = false;
}

async function show_time() {
	let url = "https://uyar.pythonanywhere.com/time?zone=" + cityElement.value
	
	let response = await fetch(url);
	let result = await response.text();
	
	document.getElementById('result').innerHTML = result;
	
}
document.getElementById("boton").addEventListener("click", function() {
	// 4 pasos para usar AJAX en JS
	// 1. Crea un objeto XHR
	var xhr = new XMLHttpRequest();
	// 2. Utiliza un Event Handler
	//xhr.onreadystatechange = function () {

	//};
	var callback = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById("ajax").innerHTML = xhr.responseText;
		}
	};
	xhr.addEventListener("readystatechange", callback);
	// 3. Abrir una conexión
	var url = window.location.href + "demo.html";
	xhr.open("GET", url);
	// 4. Enviar la petición
	xhr.send();
});

















// 4 pasos para usar AJAX en JS
// 1. Crea un objeto XHR
var xhr = new XMLHttpRequest();
// 2. Utiliza un Event Handler
//xhr.onreadystatechange = function () {

//};
var callback = function() {

};
xhr.addEventListener("readystatechange", callback);
// 3. Abrir una conexión
var url = "";
xhr.open("GET", url);
// 4. Enviar la petición
xhr.send();







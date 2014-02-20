var onDeviceReady = function() {
	FastClick.attach(document.body);
	document.getElementById("devready").innerHTML = "Ya he cargado. Y esto funciona muy bien";
};

function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function evento() {
	alert("Ya estoy aqui!");
}

function pruebame() {
	var parrafada = "";
	for (var i = 0; i < 10; i++) {
		parrafada += "Hola " + i + "<br>";
	}
	$("#jarl").html(parrafada);
}
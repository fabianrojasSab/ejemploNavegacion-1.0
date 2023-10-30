

window.onload = function() {
	cargarplantilla("pantalla1");
};

function cargarplantilla(plantilla){
	var template = document.getElementById(plantilla);
	var clon = template.content.clonNode(true);
	document.getElementById("contenedor").innerHTML ="";
	document.getElementById("contenedor").appendchild(clon);
}

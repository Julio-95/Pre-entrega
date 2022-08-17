const alumno = [];
let nombre= prompt("Ingresar nombre");
   alumno.push(nombre.toUpperCase());
let examen = parseInt(prompt("Nota del Examen"));
   alumno.push(examen);
let final = parseInt(prompt("Notal del Examen Final"));
   alumno.push(final);
let promedio = calcularPromedio()
function calcularPromedio(){
	let resultado =(examen+final)/2;
	return resultado
}
   alumno.push(promedio);
if(promedio > 10){
	alert("Las notas introducidas deben tener valor entre 0 y 10 ")
}
else if(promedio >= 7){
	alert("El promedio es "+promedio+" APROBADO");
}
else{
	alert("El promedio es "+promedio+" DESAPROBADO");
}
let n = (Math.max(examen, final, promedio));
alert("La nota mas alta de "+nombre+" fue "+n+"")



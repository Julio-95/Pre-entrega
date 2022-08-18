class alumno{

    constructor(nombre, examen, final, promedio){

        this.nombre = nombre;

        this.examen = examen;

        this.final = final;

        this.promedio = promedio;

    }

}

const alumnos = [];

let nombre= prompt("Ingresar nombre");

   alumnos.push(new alumno(nombre.toUpperCase()));

let examen = parseInt(prompt("Nota del Examen"));

   alumnos.push(new alumno(examen));

let final = parseInt(prompt("Notal del Examen Final"));

   alumnos.push(new alumno(final));

let promedio = calcularPromedio()

function calcularPromedio(){

    let resultado =(examen+final)/2;

    return resultado

}

   alumnos.push(new alumno(promedio));

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

const alumno1 = new alumno(nombre, examen, final, promedio);

console.log(alumno1)


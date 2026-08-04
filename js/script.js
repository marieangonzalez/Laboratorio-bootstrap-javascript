"use strict";

/*
    Este archivo practica:
    1. Variables y tipos de datos.
    2. Salida de información en la consola y en la página.
    3. Arreglos y objetos.
    4. Condicionales.
    5. Bucles for, while y do...while.
    6. Funciones.
*/

// Variables con diferentes tipos de datos.
const nombreEstudiante = "Marieangieliz González";
const cantidadTemas = 7;
const proyectoCompletado = true;

// Arreglo de temas.
const temasJavaScript = [
    "Variables",
    "Tipos de datos",
    "Arreglos",
    "Objetos",
    "Condicionales",
    "Bucles",
    "Funciones"
];

// Objeto con información del proyecto.
const proyecto = {
    titulo: "Página web responsiva",
    tecnologiaPrincipal: "JavaScript",
    utilizaBootstrap: true,
    cantidadSecciones: 5
};

/**
 * Muestra variables y tipos de datos.
 */
function mostrarDatos() {
    const salida = [
        `Nombre: ${nombreEstudiante} (${typeof nombreEstudiante})`,
        `Cantidad de temas: ${cantidadTemas} (${typeof cantidadTemas})`,
        `Proyecto completado: ${proyectoCompletado} (${typeof proyectoCompletado})`
    ].join("\n");

    document.getElementById("resultadoDatos").textContent = salida;

    console.log("VARIABLES Y TIPOS DE DATOS");
    console.log(nombreEstudiante, typeof nombreEstudiante);
    console.log(cantidadTemas, typeof cantidadTemas);
    console.log(proyectoCompletado, typeof proyectoCompletado);
}

/**
 * Usa if, else if y else para clasificar una edad.
 */
function evaluarEdad() {
    const edad = Number(document.getElementById("edad").value);
    const resultado = document.getElementById("resultadoEdad");
    let mensaje;

    if (!Number.isFinite(edad) || edad < 0) {
        mensaje = "Escribe una edad válida.";
    } else if (edad < 13) {
        mensaje = "La persona se encuentra en la niñez.";
    } else if (edad < 18) {
        mensaje = "La persona se encuentra en la adolescencia.";
    } else if (edad < 65) {
        mensaje = "La persona es adulta.";
    } else {
        mensaje = "La persona es adulta mayor.";
    }

    resultado.textContent = mensaje;
    console.log(`Edad evaluada: ${edad}. Resultado: ${mensaje}`);
}

/**
 * Recorre el arreglo y presenta los datos del objeto.
 */
function mostrarColecciones() {
    let salida = "ARREGLO DE TEMAS\n";

    temasJavaScript.forEach((tema, indice) => {
        salida += `${indice + 1}. ${tema}\n`;
    });

    salida += "\nOBJETO DEL PROYECTO\n";
    salida += `Título: ${proyecto.titulo}\n`;
    salida += `Tecnología principal: ${proyecto.tecnologiaPrincipal}\n`;
    salida += `Utiliza Bootstrap: ${proyecto.utilizaBootstrap}\n`;
    salida += `Cantidad de secciones: ${proyecto.cantidadSecciones}`;

    document.getElementById("resultadoColecciones").textContent = salida;

    console.log("ARREGLO:");
    console.table(temasJavaScript);
    console.log("OBJETO:");
    console.table(proyecto);
}

/**
 * Ejecuta ejemplos de los bucles for, while y do...while.
 */
function ejecutarBucles() {
    let salida = "BUCLE FOR\n";

    for (let i = 0; i < temasJavaScript.length; i += 1) {
        salida += `Iteración ${i + 1}: ${temasJavaScript[i]}\n`;
    }

    salida += "\nBUCLE WHILE\n";
    let contadorWhile = 1;

    while (contadorWhile <= 3) {
        salida += `El contador while vale ${contadorWhile}.\n`;
        contadorWhile += 1;
    }

    salida += "\nBUCLE DO...WHILE\n";
    let contadorDoWhile = 1;

    do {
        salida += `El contador do...while vale ${contadorDoWhile}.\n`;
        contadorDoWhile += 1;
    } while (contadorDoWhile <= 3);

    document.getElementById("resultadoBucles").textContent = salida;
    console.log(salida);
}

/**
 * Recibe dos números y devuelve su suma.
 *
 * @param {number} numero1 Primer número.
 * @param {number} numero2 Segundo número.
 * @returns {number} Resultado de la suma.
 */
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

/**
 * Lee los valores de los campos y utiliza la función sumar.
 */
function calcularSuma() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultadoSuma");

    if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
        resultado.textContent = "Escribe dos números válidos.";
        return;
    }

    const total = sumar(numero1, numero2);
    resultado.textContent = `${numero1} + ${numero2} = ${total}`;
    console.log(`Resultado de la función sumar: ${total}`);
}

// Eventos que conectan los botones de HTML con las funciones de JavaScript.
document.getElementById("btnMostrarDatos").addEventListener("click", mostrarDatos);
document.getElementById("btnEvaluarEdad").addEventListener("click", evaluarEdad);
document.getElementById("btnMostrarColecciones").addEventListener("click", mostrarColecciones);
document.getElementById("btnEjecutarBucles").addEventListener("click", ejecutarBucles);
document.getElementById("btnSumar").addEventListener("click", calcularSuma);

// Mensaje inicial para comprobar que el archivo externo se enlazó correctamente.
console.log("El archivo script.js se enlazó correctamente.");

let resultado = "";
do {
    let palabra = prompt("Introduce una palabra");
    if (resultado == "") {

        resultado = resultado + palabra;
    }
    //SINÓ
    else {
        resultado = resultado + " " + palabra;
    }
} while (confirm("¿Desea continuar?"));
document.write(resultado);
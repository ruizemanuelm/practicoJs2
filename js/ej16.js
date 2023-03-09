let cadena = prompt("Introduce un Texto:");
    let num = cadena.length;
    let j;
    let car;
    let salida = "";
    for (j = 0; j < num; j++) {
        car = cadena.charAt(j);
        salida = car + salida;
    }
    document.write(salida);
let cadena = prompt("Introduce una cadena de texto:");
    let num = cadena.length;
    let caracter;

    for (i = 0; i < num; i++) {
	caracter = cadena.charAt(i);
	if (i == num - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }
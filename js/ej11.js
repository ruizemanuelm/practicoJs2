let nombre1 = prompt("Nombre 1:");
    let edad1 = Number(prompt("Edad 1:"));

    let nombre2 = prompt("Nombre 2:");
    let edad2 = Number(prompt("Edad 2:"));

    let nombre3 = prompt("Nombre 3:");
    let edad3 = Number(prompt("Edad 3:"));

    let mayor = Math.max(edad1, edad2, edad3);

    if (mayor === edad1) {
        document.write("El mayor es: " + nombre1);
    }
    if (mayor === edad2) {
        document.write("El mayor es: " + nombre2);
    }
    if (mayor === edad3) {
        document.write("El mayor es: " + nombre3);
    }
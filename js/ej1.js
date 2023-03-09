let edad = parseInt(prompt("ingrese su edad"));

if (edad !== NaN ) {
    if (edad < 18) {
        document.write("no puede cconducir")
    } else if (edad>=18 && edad <90) {
        document.write("Si puede cconducir")
    }else {
        document.write("La edad ingresada no es valida")
    }
}
    else{
        document.write("ingrese un numero")
}

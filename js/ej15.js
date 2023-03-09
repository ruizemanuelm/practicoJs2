let cadena = prompt("Introduce una cadena de texto:");
let num = cadena.length;
let car;
let cont = 0;
for (i = 0; i < num; i++) {
  car = cadena.charAt(i);
  if (
    car == "A" ||
    car == "a" ||
    car == "E" ||
    car == "e" ||
    car == "I" ||
    car == "i" ||
    car == "O" ||
    car == "o" ||
    car == "U" ||
    car == "u"
  ) {
    cont++;
  }
}
document.write("Numero de Vocales: " + cont);

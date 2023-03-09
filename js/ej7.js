
let repeticiones = prompt("Introduce numero de repeticiones");

if (Number(repeticiones) == repeticiones) {
    if (repeticiones > 0 && repeticiones <= 50) {
        let j,i;
        for (i = repeticiones; i >= 1; i--) {

            for (j = i; j >= 1; j--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}
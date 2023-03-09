
let repeticiones = prompt("Introduce numero de repeticiones");
if (Number(repeticiones) == repeticiones) {
    if (repeticiones > 0 && repeticiones <= 50) {
        let j,i;

        for (i = 0; i <=repeticiones; i++) {
            for (j = 1; j <= i; j++) {
                document.write(j);
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


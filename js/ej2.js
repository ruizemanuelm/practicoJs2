let nota = prompt("Introduce tu nota");
do {
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente"); 
                nota = prompt("Introduce otra nota");
			}
			else if (nota < 5) {
				alert("Insuficiete");
                nota = prompt("Introduce otra nota");
			}
			else if (nota < 6) {
				alert("Suficiente");
                nota = prompt("Introduce otra nota");
			}
			else if (nota < 7) {
				alert("Bien");
                nota = prompt("Introduce otra nota");
			}
			else if (nota < 9) {
				alert("Notable"); 
                nota = prompt("Introduce otra nota");
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
                nota = prompt("Introduce otra nota");
			}
		}
		else {
			alert("Nota erronea");
            nota = prompt("Introduce otra nota");
		}
	}

	else {
		if (nota != undefined) {
			alert("Introduce un numero valido");
            nota = prompt("Introduce otra nota");
		}
	}
}
 while (nota != undefined);	

 //(i = i +1)  i++ (i = i + 2)   i =+ 2 //for (inicio ; ponto de parada ; iteração)

let nota = parseFloat(prompt(`Digite uma nota válida`));
let notaInvalida = isNaN(nota) || nota < 0 || nota > 10;

for (let i = 0; notaInvalida; i++) {
    alert(`Nota invalida`);
    nota = parseFloat(prompt(`Digite uma nota válida:`));
    notaInvalida = isNaN(nota) || nota < 0 || nota > 10;
}

alert(`Programa encerrado com a nota ${nota}`);


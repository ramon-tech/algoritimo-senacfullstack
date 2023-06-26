let nota = parseInt(prompt(`Informe sua nota`))

let entradaIvalida = isNaN(nota) || nota < 0 || nota > 10; //NaN significa Não é um número. isNaN significa É não é um numero
let aprovado = nota >= 7;
let reprovado = nota < 3;

if (entradaIvalida) {
    alert(`Entrada inválida \n Digite novamente`);
} else if (aprovado) {
    alert(`parabens! Você está aprovado.`);
} else if (reprovado) {
    alert(`reprovado`);
} else {
    alert(`Você está em recuperação`);
    let notaReprov = parseFloat(prompt(`Informe sua nota de recuperação`));
    let media = (nota + notaReprov) / 2;
    aprovado = media >= 5;

    if (aprovado) {
        alert(`Parabéns! Você está aprovado`);
    } else {
        alert(`Infeliz! Você está reprovado`);
    }
}




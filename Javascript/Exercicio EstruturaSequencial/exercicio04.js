let nota1 = prompt(`Informe a primeira nota bimestral:`);
let nota2 = prompt(`Informe a segunda nota bimestral:`);
let nota3 = prompt(`Informe a terceira nota bimestral:`);
let nota4 = prompt(`Informe a quarta nota bimestral:`);

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);

alert(`A sua média é ${(nota1 + nota2 + nota3 + nota4) / 4}`)
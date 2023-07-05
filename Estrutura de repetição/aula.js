let soma = 0;

for (let i = 0 ; i < 5 ; i++) {
let numero = parseInt(prompt(`Digite o numero ${i}:`))
    if (numero == 0) {
        break;
    }
soma = soma + numero;
}   
alert(soma)
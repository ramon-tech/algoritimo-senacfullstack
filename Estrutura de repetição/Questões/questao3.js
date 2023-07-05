let nome = prompt(`Digite seu nome`);
while (nome.length <= 3) {
    alert(`O nome precisa ter mais de 03 caracteres`);
    nome = prompt(`Digite seu nome novamente`);
}

for (let contador = 0; nome.length <= 3; contador++) {
    alert(`O nome precisa ter mais de 03 caracteres! Tentativa ${contador + 1}`);
    nome = prompt(`Digite seu nome novamente`);
}

let idade = parseInt(prompt(`Digite sua idade`));
while (idade < 0 || idade > 150) {
    alert(`A idade precisa ser entre 0 e 150`);
    nome = prompt(`Digite sua idade novamente`);
}

let salario = parseInt(prompt(`Digite seu salário`));
while (salario < 0) {
    alert(`O salário precisa ser maior que zero`);
    nome = prompt(`Digite seu salário novamente`);
}

let sexo = prompt(`Digite seu sexo`);
while (sexo != `m` && sexo != `f`) {
    alert(`Digite m ou f`);
    sexo = prompt(`Digite seu sexo novamente`);
}

let estadoCivil = prompt(`Digite seu estado civil`);
while (estadoCivil !== 's' 
    && estadoCivil !== 'c' 
    && estadoCivil !== 'v' 
    && estadoCivil !== 'd') 
   {
    alert(`Digite uma das seguintes letras:  's', 'c', 'v', 'd'`);
    estadoCivil = prompt(`Digite seu estado civil novamente`);
}


let resposta = prompt(`Qual o turno em que você estuda?\nM-Matutino, V-Vespertino ou N-Noturno`);

resposta = resposta.toLocaleLowerCase()

switch (resposta) {
    case `m`:
        alert(`Bom dia!`);
        break;
    case `v`:
        alert(`Boa tarde`);
        break;
    case `n`:
        alert(`Boa noite`);
        break;
    default:
}
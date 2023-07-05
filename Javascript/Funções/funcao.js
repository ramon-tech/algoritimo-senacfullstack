function bemVindo() {
    return`Bem vindo`;
}

function pegaNome() {

    let nome = document.getElementById(`nome`).value;
    let resposta = `${bemVindo()}, ${nome}!`
    document.getElementById(`saida`).innerHTML = resposta;

}
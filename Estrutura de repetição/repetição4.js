let resposta = prompt(`Eu sou bonito?`);

let respostaNaoSatisfatoria = resposta !=`sim`; 

while (respostaNaoSatisfatoria) {
    alert(`Resposta errada! Tente novamente.`);
    resposta = prompt(`Eu sou bonito?`);
    respostaNaoSatisfatoria = resposta !=`sim`;
}

alert(`Parabens! Você acertou!`);

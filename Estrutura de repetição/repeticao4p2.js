let resposta = prompt(`Eu sou bonito?`).toLowerCase().trim();

while (resposta != `sim` && resposta != `s`) {
    alert(`Resposta errada! Tente novamente.`);
    resposta = prompt(`Eu sou bonito`).toLowerCase() .trim(); 
}
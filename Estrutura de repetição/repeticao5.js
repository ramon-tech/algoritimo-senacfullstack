
do
{
    alert(`Resposta errada! Tente novamente.`).toLowerCase().trim();
    if(resposta != `sim` && resposta != `s`) {
        alert(`Resposta errada! Tentativa  novamente.`);

    } 
} while (resposta != `sim` && resposta != `s`);

alert(`Parabéns! Você acertou!`);
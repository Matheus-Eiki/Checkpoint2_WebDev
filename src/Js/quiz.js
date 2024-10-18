alert("Vamos conhecer sobres bikes")
function trocar(cor) {
    document.body.style.background = cor;
}
function calcularResultado() {

    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
  
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    
    respostas.forEach((resposta) => {
      if (resposta.value === "A") {
        scoreA++;
      } else if (resposta.value === "B") {
        scoreB++;
      } else if (resposta.value === "C") {
        scoreC++;
      }
    });
    let resultado;
    if (scoreA > scoreB && scoreA > scoreC) {
      resultado = "Bicicleta de Corrida (Speed) – Ideal para você que busca alta performance em estradas pavimentadas e ciclismo de velocidade. A bike é leve, rápida e eficiente para treinos e competições.";
    } else if (scoreB > scoreA && scoreB > scoreC) {
      resultado = "Bicicleta de Trilha (Mountain Bike - MTB para trilhas moderadas) – Perfeita para quem adora misturar aventura e performance em trilhas de terra, com equilíbrio entre conforto e agilidade. Ótima para quem quer explorar trilhas mais leves e com obstáculos moderados.";
    } else if (scoreC > scoreA && scoreC > scoreB) {
      resultado = "Bicicleta de Montanha (Mountain Bike - MTB de alta performance) – Ideal para terrenos acidentados, subidas íngremes e aventuras off-road intensas. Perfeita para quem gosta de desafios e precisa de uma bike robusta, com maior resistência e controle sobre terrenos difíceis.";
    } else {
      resultado = "Bicicleta hibrida - ideal para todos os tipos de terrenos tanto para estradas pavimentados quanto para acidentadas";
    }
  

    document.getElementById('resultado').innerText = resultado;
  }
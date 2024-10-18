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
function trocar(cor) {
    document.body.style.background = cor;
}
/*O código armazena os valores dos input
Após clicar no botão enviar ele traz um alerta na tela
Limpa os campos de input atribuindo uma str vazia
*/

function botaoenviar() {
    var input = document.getElementById('nome').value;
    var input = document.getElementById('telefone').value;
    var input = document.getElementById('email').value;

    alert("Dados enviados com sucesso");

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
}  
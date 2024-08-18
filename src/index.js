/* 1- Dar um jeito de pegar o elemento HTML dos botões.
   2- Dar um jeito de identificar o clique do usuario.
   3- Desmarcar o botão selecionado anterior.
   4- Dar um jeito de marcar o botao como selecionado.
   5- Esconder a imagem selecionada anteriormente.
   6- Mostrar a imagem correspondente ao botao selecionado.
   7- Esconder as informações do botao selecionado anteriormente.
   8- Mostrar as informações correspondentes ao botão selecionado.
*/


//1- Dar um jeito de pegar o elemento HTML dos botões.
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

//2- Dar um jeito de identificar o clique do usuario.
botoesCarrossel.forEach((botao, indice) => {
    console.log(botao);
    botao.addEventListener('click', () => {
        //3-  Desmarcar o botão selecionado anterior.
        desmarcarBotaoSelecionado();

        //4- Dar um jeito de marcar o botao como selecionado.

        marcarBotaoSelecionado(botao);
        //5- Esconder a imagem selecionada anteriormente.

        esconderImagem();
        //6- Mostrar a imagem correspondente ao botao selecionado.
        mostraImagemCorrespondente(indice);
        //7- Esconder as informações do botao selecionado anteriormente.
        esconderInformacoes();
        //8- Mostrar as informações correspondentes ao botão selecionado.
        mostrarInformacoesCorrespondete(indice);
        

    });
});

function mostrarInformacoesCorrespondete(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoes() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostraImagemCorrespondente(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}


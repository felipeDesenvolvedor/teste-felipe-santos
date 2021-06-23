var Animacao = {
    corHexa : ["#FF0000", "#FFFF00", "#00FF00", "#0000FF", "#FF1493", "#FF4500", "#4B0082"],
    corName : ["Vermelho", "Amarelo", "Verde", "Azul", "Rosa", "Laranja", "Roxo"],
    botaoDesabilitado: "Aguarde",
    botaoHabilitado:"Iniciar Animação",
    boxCor: "",
    botao : "",
    timer : "",
    indexCorAtual :0,
    alternarCorBox:() => {
        Animacao.botao.innerText = Animacao.botaoDesabilitado
        Animacao.botao.disabled = true
        
        Animacao.time = setInterval(() => {

            if(Animacao.indexCorAtual > Animacao.corHexa.length - 1) {
                clearInterval(Animacao.time)
                Animacao.indexCorAtual = 0
                Animacao.botao.innerText = Animacao.botaoHabilitado
                Animacao.botao.disabled = false
                document.querySelector('.container').prepend(Animacao.boxCor)
                return;
            }
    
            Animacao.boxCor.style.transform = "scale(1)"

            Animacao.boxCor.style.backgroundColor = Animacao.corHexa[Animacao.indexCorAtual]
            Animacao.boxCor.innerText = Animacao.corName[Animacao.indexCorAtual]

            Animacao.indexCorAtual += 1;

           
        }, 1000)
    },
    iniciarAnimacao: () => {
        Animacao.botao = document.querySelector(".botao")
        Animacao.botao.innerText = Animacao.botaoHabilitado

        Animacao.boxCor = document.querySelector(".box-cor")

        Animacao.botao.addEventListener("click", () => {
            Animacao.alternarCorBox();
        })
    },
    init: () => {
        Animacao.iniciarAnimacao()
    }
}


document.addEventListener("DOMContentLoaded", () => {
    Animacao.init()
})
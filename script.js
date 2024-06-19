const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O desmatamento no Brasil é um problema ambiental que afeta todos os biomas. Qual é uma das principais causas do desmatamento?",
        alternativas: [
            {
                texto: "Urbanização.",
                afirmacao: "Expansão das cidades. "
            },
            {
                texto: "Agricultura não sustentável.",
                afirmacao: "É agricultura é uma causa significativa de desmatamento."
            }
        ]
    },
    {
        enunciado: "O desmatamento é um problema ambiental que se perpetua no Brasil desde século XVI. Qual é o principal impacto ambiental do desmatamento?",
        alternativas: [
            {
                texto: "Aumento da biodiversidade.",
                afirmacao: "O desmatamento diminui à biodiversidade."
            },
            {
                texto: "Perda de habitats e espécies.",
                afirmacao: " Além de devastar os recuros naturais,compromete o equilíbrio do planeta com perda de habitats e espécies."
            }
        ]
    },
    {
        enunciado: "Após fiscalizações de áreas preservadas,é possível verificar desmatamentos sem autorização. O que são áreas de desmatamento ilegal?",
        alternativas: [
            {
                texto: "Áreas protegidas por lei.",
                afirmacao: "São matas, florestas nativas que são protegidas por lei."
            },
            {
                texto: "Áreas desmatadas sem autorização legal.",
                afirmacao: "Áreas de desmatamento ilegal são aquelas desmatadas sem nenhuma autorização legal."
            }
        ]
    },
    {
        enunciado: "Hoje o desmatamento é um dos problemas climáticos. Como o desmatamento pode contribuir para as mudanças climáticas?",
        alternativas: [
            {
                texto: "Reduzindo as emissões de gases de efeito estufa.",
                afirmacao: "Reduzir as emissões de gases de efeito estufa é essencial para atenuar as mudanças climáticas e proteger as futuras gerações."
            },
            {
                texto: "Liberando carbono armazenado na vegetação.",
                afirmacao: "O desmatamento contribui para as mudanças climáticas ao liberar carbono na atmosfera."
            }
        ]
    },
    {
        enunciado: "Após os estudos verificou-se que é preciso medidas para conter o desmatamento. O que pode ser feito para reduzir o desmatamento?",
        alternativas: [
            {
                texto: "Aumentar o consumo de produtos de origem ambiental.",
                afirmacao: "Infelizmente o consumo de produtos de origem ambiental afeta ainda mais o equilíbrio do planeta."
            },
            {
                texto: "Promover práticas de uso da terra sustentáveis.",
                afirmacao: "Práticas sustentáveis e políticas ambientais eficazes são essenciais para reduzir o desmatamento. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2035...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

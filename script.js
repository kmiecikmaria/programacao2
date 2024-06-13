const perguntas = [
    {
    enunciado: "Você tem medo do futuro?",
    alternativas: [
    "Isso é assustador!",
    "Isso é maravilhoso!"
    ]
    },
    {
    
    enunciado: "Você prefere cachorro ou gato?",
    alternativas: [
    "Cachorro",
    "Gato"
    ]
    },
    {
    enunciado: "Qual sua cor favorita?",
    alternativas: [
    "Rosa",
    "Preto"
    ]
    },
    {
    enunciado: "Você prefere doce ou salgado?",
    alternativas: [
    "Doce",
    "Salgado"
    ]
    },
    {
    enunciado: "Você prefere inverno ou verão?",
    alternativas: [
    "Inverno",
    "Verão"
    ]
    
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();

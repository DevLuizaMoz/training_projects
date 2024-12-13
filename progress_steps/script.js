// Obtendo o elemento do DOM com o id 'progress'
const progress = document.getElementById('progress');

// Obtendo o elemento do DOM com o id 'prev'
const prev = document.getElementById('prev');

// Obtendo o elemento do DOM com o id 'next'
const next = document.getElementById('next');

// Obtendo todos os elementos do DOM com a classe 'circle'
const circles = document.querySelectorAll('.circle');

// Inicializando a variável 'currentActive' com o valor 1
let currentActive = 1;

// Adicionando um evento de clique ao botão 'next'
next.addEventListener('click', () => {
    // Incrementando o valor de 'currentActive' ao clicar no botão 'next'
    currentActive++;

    // Verificando se 'currentActive' excede o número de círculos
    if(currentActive > circles.length) {
        // Limitando 'currentActive' ao número máximo de círculos
        currentActive = circles.length;
    }
    
    // Chamando a função 'update' para atualizar o estado dos círculos
    update();
});

// Adicionando um evento de clique ao botão 'prev'
prev.addEventListener('click', () => {
    // Decrementando o valor de 'currentActive' ao clicar no botão 'prev'
    currentActive--;

    // Verificando se 'currentActive' é menor que 1
    if(currentActive < 1) {
        // Limitando 'currentActive' ao mínimo de 1
        currentActive = 1;
    }
    
    // Chamando a função 'update' para atualizar o estado dos círculos
    update();
});

// Definição da função 'update' que atualiza o estado visual dos círculos e botões
function update() {
    // Iterando sobre todos os círculos e atualizando suas classes
    circles.forEach((circle, idx) => {
        // Adiciona a classe 'active' aos círculos com índice menor que 'currentActive'
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            // Remove a classe 'active' dos outros círculos
            circle.classList.remove('active');
        }
    });

    // Obtendo todos os elementos com a classe 'active'
    const actives = document.querySelectorAll('.active');

    // Atualizando a largura do elemento 'progress' com base nos círculos ativos
    // Calcula a proporção de círculos ativos (excluindo o primeiro e o último)
    // e multiplica por 100 para obter a porcentagem
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Atualizando o estado dos botões 'prev' e 'next'
    if(currentActive === 1) {
        // Desabilita o botão 'prev' se 'currentActive' for 1 (primeiro círculo)
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        // Desabilita o botão 'next' se 'currentActive' for igual ao número de círculos (último círculo)
        next.disabled = true;
    } else {
        // Habilita ambos os botões se estiver no meio da sequência
        prev.disabled = false;
        next.disabled = false;
    }
}
 
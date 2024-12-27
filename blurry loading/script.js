// Seleciona o elemento que contém o texto de carregamento
const loadText = document.querySelector('.loading-text');
// Seleciona o elemento de fundo que será desfocado
const bg = document.querySelector('.bg');

// Inicializa a variável 'load' com valor 0
let load = 0;
// Define um intervalo que chama a função 'blurring' a cada 30 milissegundos
let int = setInterval(blurring, 30);

// Função que será chamada a cada 30 milissegundos para simular o carregamento
function blurring() {
    // Incrementa a variável 'load' em 1
    load++;
    
    // Se 'load' for maior que 99, para o intervalo
    if (load > 99) {
        clearInterval(int);
    }
    
    // Atualiza o texto de carregamento com o valor atual de 'load' seguido de '%'
    loadText.innerHTML = `${load}%`;
    
    // Ajusta a opacidade do texto de carregamento com base no valor atual de 'load'
    // A opacidade vai de 1 (completamente visível) a 0 (completamente invisível)
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // 1. `num`: O valor atual que você deseja mapear. No seu caso, é o valor de `load`.
    //2. `in_min`: O valor mínimo da faixa de entrada. No seu caso, é `0`, representando o início do carregamento.
    // 3. `in_max`: O valor máximo da faixa de entrada. No seu caso, é `100`, representando o final do carregamento.
    //4. `out_min`: O valor mínimo da faixa de saída. No seu caso, é `1`, representando a opacidade máxima.
    //5. `out_max`: O valor máximo da faixa de saída. No seu caso, é `0`, representando a opacidade mínima.
    //Então, a linha `loadText.style.opacity = scale(load, 0, 100, 1, 0)` está mapeando o valor de `load` (que vai de `0` a `100`) para uma faixa de opacidade que vai de `1` (totalmente visível) a `0` (completamente invisível). Conforme o valor de `load` aumenta, a opacidade do texto diminui, criando um efeito de desvanecimento.
    
    // Ajusta o filtro de desfoque do fundo com base no valor atual de 'load'
    // O desfoque vai de 30 pixels (máximo desfoque) a 0 pixels (sem desfoque)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Função que mapeia um número de uma faixa para outra
// Por exemplo, se 'num' está entre 'in_min' e 'in_max', esta função o ajusta para a faixa entre 'out_min' e 'out_max'
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

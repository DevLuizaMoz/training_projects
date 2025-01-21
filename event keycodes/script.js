// Seleciona o elemento com o ID 'insert' e armazena na variável 'insert'
const insert = document.getElementById('insert');

// Adiciona um ouvinte de evento para detectar quando uma tecla é pressionada
window.addEventListener('keydown', (event) => {
    // Substitui o conteúdo HTML do elemento 'insert' com as informações da tecla pressionada
    insert.innerHTML = `
    <div class="key">
            ${event.key === ' ' ? 'Space' : event.key} 
            <small>event.key</small> <!-- Exibe o valor de event.key (ou 'Space' se for a barra de espaço) -->
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small> <!-- Exibe o valor de event.keyCode -->
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small> <!-- Exibe o valor de event.code -->
        </div>`
});
/*
const insert = document.getElementById('insert'):
    Esta linha seleciona o elemento HTML com o ID 'insert' e o armazena na variável insert.

window.addEventListener('keydown', (event) => { }):
    Aqui, você está adicionando um ouvinte de eventos (addEventListener) para o evento keydown. Isso significa que, sempre que qualquer tecla for pressionada e mantida pressionada, a função fornecida, chamada de função de callback, será executada.

Dentro do addEventListener, você tem um bloco de código que atualiza o conteúdo do elemento insert com informações específicas sobre a tecla pressionada:

javascript
    insert.innerHTML = `
    <div class="key">
            ${event.key === '' ? 'Space' : event.key} 
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>`
    insert.innerHTML substitui o conteúdo HTML do elemento insert.

A parte ${event.key === '' ? 'Space' : event.key}: Verifica se a tecla pressionada é a barra de espaço (que aparece como uma string vazia ''), e exibe a palavra 'Space' em vez disso. Para outras teclas, exibe o valor de event.key.

${event.keyCode} e ${event.code}: Exibem os valores de event.keyCode (um número único atribuído à tecla pressionada) e event.code (um código que especifica a tecla pressionada, independentemente do layout do teclado).
*/
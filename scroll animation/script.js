// Seleciona todos os elementos com a classe 'box'
const boxes = document.querySelectorAll('.box')

// Adiciona um evento de scroll à janela, que chama a função 'checkBoxes' sempre que ocorre um scroll
window.addEventListener('scroll', checkBoxes)

// Chama a função 'checkBoxes' imediatamente para verificar a posição das caixas ao carregar a página
checkBoxes()

// Função que verifica a posição das caixas em relação à janela de visualização
function checkBoxes() {
    // Calcula a posição na tela que serve como gatilho para mostrar as caixas (80% da altura da janela)
    const triggerBottom = window.innerHeight / 5 * 4
    
    // Itera sobre cada elemento 'box'
    boxes.forEach(box => {
        // Obtém a posição do topo de cada 'box' em relação à janela de visualização
        const boxTop = box.getBoundingClientRect().top
        
        // Se o topo da 'box' estiver acima da posição de gatilho, adiciona a classe 'show'
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            // Caso contrário, remove a classe 'show'
            box.classList.remove('show')
        }
    })
}

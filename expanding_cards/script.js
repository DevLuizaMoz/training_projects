// Seleciona todos os elementos com a classe 'panel' e os armazena em uma NodeList
const panels = document.querySelectorAll('.panel')

// Adiciona um ouvinte de eventos de clique para cada painel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() // Remove a classe 'active' de todos os painéis
        panel.classList.add('active') // Adiciona a classe 'active' ao painel clicado
    })
})

// Função para remover a classe 'active' de todos os painéis
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active') // Remove a classe 'active' de cada painel
    })
}

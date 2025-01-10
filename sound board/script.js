// Array de nomes de sons
const sounds = ['aplause', 'tada', 'victory', 'wrong']

// Itera sobre cada som no array
sounds.forEach(sound => {
    // Cria um elemento de botão para cada som
    const btn = document.createElement('button')
    // Adiciona a classe 'btn' ao botão para estilização
    btn.classList.add('btn')

    // Define o texto do botão como o nome do som
    btn.innerText = sound

    // Adiciona um evento de clique ao botão
    btn.addEventListener('click', () => {
        // Para todos os sons antes de reproduzir o som clicado
        stopSongs()
        // Reproduz o som associado ao botão clicado
        document.getElementById(sound).play()
    })

    // Adiciona o botão criado ao elemento no DOM com o id 'buttons'
    document.getElementById('buttons').appendChild(btn)
})

// Função para parar todos os sons
function stopSongs(){
    // Itera sobre cada som no array
    sounds.forEach(sound => {
        // Obtém o elemento de áudio pelo id
        const song = document.getElementById(sound)
        
        // Pausa o som se estiver tocando
        song.pause()
        // Reseta o tempo do som para 0, para que comece do início na próxima reprodução
        song.currentTime = 0;
    })
}

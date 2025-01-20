// Obtém a referência ao elemento HTML com o ID 'joke'
const jokeEl = document.getElementById('joke');

// Obtém a referência ao botão HTML com o ID 'jokeBtn'
const jokeBtn = document.getElementById('jokeBtn');

// Adiciona um ouvinte de evento ao botão que chama a função generateJoke ao ser clicado
jokeBtn.addEventListener('click', generateJoke);

// Chama a função generateJoke imediatamente ao carregar a página
generateJoke();

// Define a função generateJoke
function generateJoke(){
    // Configuração para a requisição fetch, especificando que aceita resposta no formato JSON
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    
    // Faz uma requisição HTTP GET para a URL 'https://icanhazdadjoke.com/' com a configuração especificada
    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json()) // Quando a resposta é recebida, converte-a para JSON
        .then((data) => {
            // Insere a piada recebida no elemento HTML 'joke'
            jokeEl.innerHTML = data.joke;
        })
        .catch((error) => {
            // Caso ocorra um erro, exibe no console
            console.error('Erro:', error);
        });
}

//Obter elementos HTML:

// const jokeEl = document.getElementById('joke');: Obtém a referência ao elemento HTML com o ID joke, onde a piada será exibida.

// const jokeBtn = document.getElementById('jokeBtn');: Obtém a referência ao botão com o ID jokeBtn, que será clicado para gerar uma nova piada.

// Adicionar ouvintes de eventos:

// jokeBtn.addEventListener('click', generateJoke);: Adiciona um ouvinte de evento ao botão que chama a função generateJoke quando o botão é clicado.

// Chamar a função ao carregar a página:

// generateJoke();: Chama a função generateJoke imediatamente quando a página carrega, para exibir uma piada inicial.

// Definir a função generateJoke:

// A função generateJoke faz uma requisição HTTP GET para a URL https://icanhazdadjoke.com/ usando a função fetch. Ela usa a configuração config para especificar que a resposta deve estar no formato JSON.

// Quando a resposta é recebida, ela é convertida para JSON usando res.json().

// O objeto JSON resultante contém a piada, que é acessada com data.joke e inserida no elemento HTML jokeEl.

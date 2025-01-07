// Seleciona todos os elementos <label> dentro de .form-control
const labels = document.querySelectorAll('.form-control label');

// Itera sobre cada label
labels.forEach(label => {
    // Define o conteúdo HTML do label dividindo seu texto em spans com delay de transição
    label.innerHTML = label.innerText
        .split('') // Divide o texto do label em caracteres individuais
        .map((letter, idx) => 
            // Envolve cada letra em um span e aplica um delay de transição baseado no índice
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join(''); // Junta os spans de volta em uma única string
});

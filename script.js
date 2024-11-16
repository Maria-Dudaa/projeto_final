// Seleciona os elementos
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

// Adiciona um evento de clique no botão de pesquisa
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('activate');
});

// Evento de rolagem da página
window.addEventListener('scroll', () => {
    // Fecha o formulário de pesquisa ao rolar
    searchForm.classList.remove('activate');
    
    // Adiciona ou remove a classe 'activate' no header-2 conforme o scroll
    const header2 = document.querySelector('.header .header-2');
    if (window.scrollY > 80) {
        header2.classList.add('activate');
    } else {
        header2.classList.remove('activate');
    }
});

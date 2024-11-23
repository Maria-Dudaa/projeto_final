

const searchForm = document.querySelector('.search-form'); 
const loginForm = document.querySelector('.login-form-container'); 
const header2 = document.querySelector('.header-2'); 

// Botão de busca
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('activate');
};

// Botão de login
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('activate');
};

// Fechar o formulário de login
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('activate');
};

// Evento de rolagem da página
window.onscroll = () => {
    searchForm.classList.remove('activate'); 

    if (window.scrollY > 80) {
        header2.classList.add('activate'); 
    } else {
        header2.classList.remove('activate');
    }
};

// Configuração ao carregar a página
window.onload = () => {
    if (window.scrollY > 80) {
        header2.classList.add('activate');
    } else {
        header2.classList.remove('activate');
    }
};




/* Teste de código 
const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form-container');
const header2 = document.querySelector('.header-2');

searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('activate');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active');

}

document.querySelector('#close-login-btn').onclick =() =>{
    loginForm.classList.remove('active');
    
}

window.onscroll = () => {

    searchForm.classList.remove('activate');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('activate');
    } else {
        document.querySelector('.header .header-2').classList.remove('activate');
    }
};

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('activate');
    } else {
        document.querySelector('.header .header-2').classList.remove('activate');
    }
};*/
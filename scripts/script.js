'use strict';
//variabile contenente l'url
const ApiUrl = 'https://lanciweb.github.io/demo/api/pictures/';
//variabili che prendono elementi dall'html per i messaggi. 
const elemCaricamento = document.querySelector('#mess-caricamento');
const elemErrCaricamento = document.querySelector('#mess-errore-caricamento');

//inner html che fa apparire a schermo il mess di caricamento.
elemCaricamento.innerHTML = 'Caricamento';

//chiamata API.
fetch(ApiUrl)
    .then(response => {
        return response.json()
    })
    .then(dataJson => {
        console.log(dataJson);
    })
    .catch(error => {
        console.error(error);
        elemErrCaricamento.innerHTML = 'errore durante il caricamento';

    })
    //svuota la stringa di caricamento 
    .finally(() => {
        elemCaricamento.innerHTML = '';
    })


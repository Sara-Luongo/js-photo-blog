'use strict';
const ApiUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const elemCaricamento = document.querySelector('#mess-caricamento');
const elemErrCaricamento = document.querySelector('#mess-errore-caricamento');

elemCaricamento.innerHTML = 'Caricamento';


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
    .finally(() => {
        elemCaricamento.innerHTML = '';
    })


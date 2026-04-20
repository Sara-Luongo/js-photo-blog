'use strict';

//variabile contenente l'url
const ApiUrl = 'https://lanciweb.github.io/demo/api/pictures/';
//variabili che prendono elementi dall'html per i messaggi caricamento o errore. 
const elemCaricamento = document.querySelector('#mess-caricamento');
const elemErrCaricamento = document.querySelector('#mess-errore-caricamento');
//variabile che prende contenitore card in html.
const galleryContainer = document.querySelector('#gallery-container');

//riferimenti html per il modale. 
const myModalContainer = document.querySelector('#my-modal');
const imgModal = document.querySelector('#img-full');
const buttonModal = document.querySelector('#modal-button');
//inner html che fa apparire a schermo il mess di caricamento.
elemCaricamento.innerHTML = 'Caricamento';

// funzione che genera card nella gallery
function generatoreCards(gallery) {
    let galleryHtml = '';
    let contenitoreCard = '';

    for (const dataGallery of gallery) {
        contenitoreCard = document.createElement('div');
        contenitoreCard.classList.add('col-md-6');
        contenitoreCard.classList.add('col-lg-4');

        galleryHtml = `   <div class="my-card mx-auto">
                        <div class="wrapper-img">
                            <img src="${dataGallery.url}" class="grandezza-img" alt="immagine gallery">
                            <img src="./img/pin.svg" class="img-absolute" alt="pin">
                        </div>
                        <div class="text-wrapper">
                            <p>${dataGallery.title}</p>
                            <p>${dataGallery.date}</p>
                        </div>
                    </div>`

        contenitoreCard.innerHTML = galleryHtml;

        contenitoreCard.addEventListener("click", function () {
            myModalContainer.classList.remove('none-d');
            myModalContainer.classList.add('flex-d');
            imgModal.src = dataGallery.url

        });
        galleryContainer.appendChild(contenitoreCard);
    }
    buttonModal.addEventListener('click', function () {
        myModalContainer.classList.remove('flex-d');
        myModalContainer.classList.add('none-d');
    })
};


//chiamata API.
fetch(ApiUrl)
    .then(response => {
        return response.json();
    })
    .then(dataJson => {
        generatoreCards(dataJson); //(passaggio datyJson alla funzione.);
    })
    .catch(error => {
        console.error(error);
        elemErrCaricamento.classList.remove('none-d');
    })
    //svuota la stringa di caricamento 
    .finally(() => {
        elemCaricamento.innerHTML = '';
    })


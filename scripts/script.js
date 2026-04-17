'use strict';
const ApiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

fetch(ApiUrl)
    .then(response => {
        return response.json()
    })
    .then(dataJson => {
        console.log(dataJson);
    })
    .catch(error => {
        console.error(error);

    })


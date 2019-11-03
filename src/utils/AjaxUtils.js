import { ajax } from 'rxjs/ajax';

export const getJSON = urlApi => ajax({
    url: urlApi,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
       
       
    }
});

export const getJSON2 = urlApi => ajax.getJSON(urlApi, {
    'Content-Type': 'application/json'
})



export const postJSON = urlApi => ajax({
    url: urlApi,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
    }
});
console.log('Client.js is good to go');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $.ajax({
        method: 'GET',
        url: '/records'
    })
        // method or type can be used in jquery. not in angular
        .then(function (response) {
            console.log(response);
            // for (let i = 0; i < response.length; i++) {
            //     $('#records').append('<ul><li>' + response[i].title + ' - ' + response[i].year + ' : ' + response[i].artist + ' $' + response[i].cost + '</li></ul>');
            // }
            // a forEach loop could be used for less code:
            response.forEach(function (record) {
                $('#records').append(`<tr>
                    <td>${record.title}</td>
                    <td>${record.artist}</td>
                    <td>${record.year}</td>
                    <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD'}).slice(0, -3)}</td>
                    </tr>`);
            });
        });
}
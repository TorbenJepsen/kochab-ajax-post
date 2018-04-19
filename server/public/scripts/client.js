console.log('Client.js is good to go');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $.ajax({
        type: 'GET',
        url: '/records'
    })
        .then(function (response) {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                $('#records').append('<ul><li>' + response[i].title + ' - ' + response[i].year + ' : ' + response[i].artist + ' $' + response[i].cost + '</li></ul>');
            }
        });
}
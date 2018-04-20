console.log('Client.js is good to go');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded');
    $('#addNewSong').on('click', addNew);
    getAllSongs();
}

function getAllSongs() {
    $.ajax({
        method: 'GET',
        url: '/records'
    })
        // method or type can be used in jquery. not in angular
        .then(function (response) {
            console.log(response);
            $('#records').empty();
            // for (let i = 0; i < response.length; i++) {
            //     $('#records').append('<ul><li>' + response[i].title + ' - ' + response[i].year + ' : ' + response[i].artist + ' $' + response[i].cost + '</li></ul>');
            // }
            // a forEach loop could be used for less code (for each loops can only be used for arrays!):
            response.forEach(function (record) {
                $('#records').append(`<tr>
                    <td>${record.title}</td>
                    <td>${record.artist}</td>
                    <td>${record.year}</td>
                    <td>${record.cost.toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td>
                    </tr>`);
            });
        });
}

function addNew(title, artist, year, cost) {
    const newSong = {
        title: $('#title').val(),
        artist: $('#artist').val(),
        year: $('#year').val(),
        cost: $('#cost').val()
    };
    console.log('New song object', newSong);
    $.ajax({
        method: 'POST',
        url: '/add-record',
        data: newSong
    })
        .then(function (response) {
            console.log(response);
           getAllSongs();
        });
        
}
$( document ).ready(function() {

    // Plays a Benoit and increments total count
    $('#benoit-button').click(function() {
        getRandomBenoit().play();
        $('#benoit-count').text(parseInt($('#benoit-count').text())+1);
    });

});

// Returns a random Benoit
function getRandomBenoit() {
    return new Audio('sounds/benoit'+Math.trunc(Math.random() * 3 + 1)+'.mp3');
}
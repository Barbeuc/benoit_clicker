$( document ).ready(function() {

    // Plays a Benoit and increments total count
    $('#benoit-button').click(function() {
        getRandomBenoit().play();
        $('#benoit-count').text(parseInt($('#benoit-count').text())+1);
    });
    // change the value of Audio
    $('#selection').on('change', function() {
        change($(this).val());
    });

});

// Returns a random Benoit
function getRandomBenoit() {
    return new Audio('sounds/benoit'+Math.trunc(Math.random() * 3 + 1)+'.mp3');
}
function change(sourceUrl) {
    var audio = document.getElementById("player");
    var source = document.getElementById("mp3_src");

    audio.pause();

    if (sourceUrl) {
        source.src = sourceUrl;
        audio.load();
        audio.play();
    }
}
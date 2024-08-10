

document.getElementById('open-card').addEventListener('click', function() {
    // Show the modal on page load
    $('#musicModal').modal('show');

    // Event listener for the modal button
    $('#startMusicButton').on('click', function() {
        var audio = document.getElementById('backgroundAudio');
        audio.play();
        $('#musicModal').modal('hide');
    });
    document.getElementById('card-front').classList.add('d-none');

    // Show mantra GIF for a transition effect
    document.getElementById('mantra-container').classList.remove('d-none');
    setTimeout(function() {
        document.getElementById('mantra-container').classList.add('d-none');
        document.getElementById('card-inside').classList.remove('d-none');
    }, 500);  // Adjust time as needed
});

function countdown() {
    const weddingDate = new Date('2024-11-22T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = "The Wedding Day is Here!";
    }
}

const interval = setInterval(countdown, 1000);

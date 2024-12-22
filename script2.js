document.addEventListener('DOMContentLoaded', function () {
    // Show the modal on page load
    $('#musicModal').modal('show');

    // Event listener for the modal button
    $('#startMusicButton').on('click', function () {
        var audio = document.getElementById('backgroundAudio');
        audio.play();
        $('#musicModal').modal('hide');
    });

    // Method to dynamically load images from the specified array
    const imageFilenames = [
        'photo1.JPG',
        'photo2.JPG',
        'photo3.JPG',
        'photo4.JPG', 
        'photo5.JPG',
        'photo6.JPG',
        'photo7.JPG',
        'photo8.JPG', 
        'photo9.JPG', 
        'photo10.JPG'
    ];

    // Reference to the carousel inner container where images will be added
    const carouselInner = document.querySelector('.carousel-inner');

    // Clear existing static items if any
    carouselInner.innerHTML = '';

    // Loop through the image filenames and dynamically create carousel items
    imageFilenames.forEach((filename, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        if (index === 0) {
            carouselItem.classList.add('active'); // Set the first item as active
        }

        const img = document.createElement('img');
        img.src = `images/${filename}`;
        img.classList.add('d-block', 'w-100');
        img.alt = `Photo ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });

    // Add event listener for the "Open Invitation" button
    document.getElementById('open-card').addEventListener('click', function() {
        document.getElementById('card-front').classList.add('d-none');

        // Show mantra GIF for a transition effect
        document.getElementById('mantra-container').classList.remove('d-none');
        setTimeout(function() {
            document.getElementById('mantra-container').classList.add('d-none');
            document.getElementById('card-inside').classList.remove('d-none');
        }, 500);  // Adjust time as needed
    });

    // Initial call to countdown function
    countdown();
    const interval = setInterval(countdown, 1000);
});

function countdown() {
    const weddingDate = new Date('2024-11-22T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = now - weddingDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById('timer');

    
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

document.addEventListener("DOMContentLoaded", function() {
  // Show the modal on page load
  $('#musicModal').modal('show');

  // Event listener for the modal button
  $('#startMusicButton').on('click', function() {
      var audio = document.getElementById('backgroundAudio');
      audio.play();
      $('#musicModal').modal('hide');
  });

  // Initialize the countdown timer
  initializeCountdownTimer('Nov 22, 2024 00:00:00');

  // Fetch images from Google Drive and populate the carousel
  fetchImagesFromGoogleDrive();
});

function fetchImagesFromGoogleDrive() {
  const folderId = '1drGZyUnLgbYuFqe5xALGJrobZp0Xfpxe'; // Replace with your Google Drive folder ID
  const apiKey = 'AIzaSyCDZ9QwjQq6phaLIoJskd0rfWSl2TttdHc'; // Replace with your Google API key

  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,webViewLink,webContentLink,thumbnailLink)`;

  // fetch(url)
  //     .then(response => {
  //         if (!response.ok) {
  //             throw new Error(`Network response was not ok: ${response.statusText}`);
  //         }
  //         return response.json();
  //     })
  //     .then(data => {
  //         console.log('Fetched data:', data); // Debugging log
  //         const images = data.files.filter(file => file.mimeType.startsWith('image/'));
  //         if (images.length === 0) {
  //             console.error('No images found in the specified Google Drive folder.');
  //             return;
  //         }
  //         const carousel = document.getElementById('carousel');
  //         carousel.innerHTML = ''; // Clear any existing content

  //         const angle = 360 / images.length;
  //         images.forEach((image, index) => {
  //             const img = document.createElement('img');
  //             img.dataset.src = `https://drive.google.com/uc?id=${image.id}`;
  //             img.alt = image.name;
  //             img.classList.add('carousel-img', 'lazyload');
  //             img.style.transform = `rotateY(${index * angle}deg) translateZ(300px)`;
  //             console.log('Adding image:', img.dataset.src); // Debugging log
  //             carousel.appendChild(img);
  //         });
  //     })
  //     .catch(error => console.error('Error fetching images from Google Drive:', error));
  
  }

function initializeCountdownTimer(targetDate) {
  const countdownDate = new Date(targetDate).getTime();

  const countdownFunction = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
          clearInterval(countdownFunction);
          document.getElementById('timer').innerHTML = 'The big day has arrived!';
      }
  }, 1000);
}

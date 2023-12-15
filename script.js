function randomSanta() {
  const card = document.getElementById('card');
  const santaImage = document.getElementById('cardCover');

  // Check if santaImage exists
  if (santaImage) {
    // Add a random background image from the "assets/images/images-santa" folder
    const randomSantaImages = [
      'images-santa/santa-brown.jpg',
      'images-santa/santa-gifts.jpg',
      'images-santa/santa-magic.jpg',
      'images-santa/santa-pipe.jpg',
      'images-santa/stampa.jpg',
      'images-santa/two-santas.jpg'
    ];

    const randomSantaImage = randomSantaImages[Math.floor(Math.random() * randomSantaImages.length)];

    santaImage.style.backgroundImage = `url("/assets/images/images-santa/${randomSantaImage}")`;

    card.classList.toggle('open');
  }
}


  
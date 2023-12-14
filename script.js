function openCard() {
    const card = document.getElementById('card');
    const cardCover = document.getElementById('cardCover');
  
    // Add a random background image from the "assets" folder
    const randomImages = [
      'assets/images/santa-brown.jpg',
      'assets/images/santa-gifts.jpg',
      'assets/images/santa-magic.jpg',
      'assets/images/santa-pipe.jpg',
      'assets/images/stampa.jpg',
      'assets/images/two-santas.jpg'
    ];
    const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
  
    cardCover.style.backgroundImage = `url("assets/${randomImage}")`;
  
    card.classList.toggle('open');
  }
  
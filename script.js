function openCard() {
    const card = document.getElementById('card');
    const cardCover = document.getElementById('cardCover');
  
    // Add a random background image from the "assets" folder
    const randomImages = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
    ];
    const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
  
    cardCover.style.backgroundImage = `url("assets/${randomImage}")`;
  
    card.classList.toggle('open');
  }
  
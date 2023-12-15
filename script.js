function openCard() {

}



function randomSanta() {
  const card = document.getElementById('card');
  const cardCover = document.getElementById('cardCover');

  // Add a random background image from the "assets" folder
  const randomSantaImages = [
    'assets/images/images-santa/santa-brown.jpg',
    'assets/images/images/santa-gifts.jpg',
    'assets/images/images/santa-magic.jpg',
    'assets/images/images/santa-pipe.jpg',
    'assets/images/images/stampa.jpg',
    'assets/images/images/two-santas.jpg'
  ];
  const randomSantaImage = randomSantaImages[Math.floor(Math.random() * randomSantaImages.length)];

  cardCover.style.backgroundImage = `url("${randomSantaImage}")`;

  card.classList.toggle('open');
}

  
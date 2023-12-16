const PLAYURL = 'play.js?'
const IMAGE_CARD_URL = 'assets/images/options/'

const updateURL = () => {
  let url = `${PLAYURL}?`

  const elementsInput = document.querySelectorAll('.form-control')
  elementsInput.forEach(function (element) {
    if (element.value !== '' && element.name !== '') {
      console.log(element.name, '=', element.value)
      url += `${element.name}=${element.value}&`
    }
  })

  radioButtons = document.querySelectorAll('input[type=radio]:checked')
  radioButtons.forEach(function (radioButton) {
    if (radioButton.value !== '' && radioButton.name !== '') {
      console.log(radioButton.name, '=', radioButton.value)
      url += `${radioButton.name}=${radioButton.value}&`
    }
  })

  // Remove the last "&" character
  url = url.slice(0, -1)

  document.getElementById('debugURL').value = url
  return url
}

function showSelectedImage() {
  // Get the selected option value
  const selectedValue = document.getElementById('imageSelect').value
  document.getElementById('imageCard').src = IMAGE_CARD_URL + selectedValue
}

function openCard() {
  const card = document.getElementById('card')
  const cardCover = document.getElementById('cardCover')

  // Add a random background image from the "assets" folder
  const randomImages = [
    'assets/images/santa-brown.jpg',
    'assets/images/santa-gifts.jpg',
    'assets/images/santa-magic.jpg',
    'assets/images/santa-pipe.jpg',
    'assets/images/stampa.jpg',
    'assets/images/two-santas.jpg',
  ]
  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)]

  cardCover.style.backgroundImage = `url("assets/${randomImage}")`

  card.classList.toggle('open')
}

addEventListener('DOMContentLoaded', function () {
  const elementsInput = document.querySelectorAll('.form-control')
  elementsInput.forEach(function (element) {
    if (element.name !== '') {
      element.addEventListener('change', updateURL)
    }
  })

  const radioButtons = document.querySelectorAll('input[type=radio]')
  radioButtons.forEach(function (radioButton) {
    if (radioButton.name !== '') {
      radioButton.addEventListener('change', updateURL)
    }
  })

  const imageSelect = document.getElementById('imageSelect')
  imageSelect.addEventListener('change', showSelectedImage)

  const soundSelect = document.getElementById('soundSelect')
  const audioPlayer = document.getElementById('audioPlayer')
  soundSelect.addEventListener('change', function () {
    const selectedSoundPath = soundSelect.value
    const audioSource = document.getElementById(selectedSoundPath)
    audioPlayer.src = audioSource.src
    audioPlayer.load()
    audioPlayer.play()
  })

  // const cardText = document.getElementById('cardText')
  // cardText.addEventListener('keyup', updateURL)
})

updateURL()

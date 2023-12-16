const PLAYURL = 'play.js'
const IMAGE_CARD_URL = 'assets/images/options/'
const SOUND_CARD_URL = 'assets/sounds/'

const updateURL = () => {
  let url = `${PLAYURL}?`

  const elementsInput = document.querySelectorAll('.form-control')
  elementsInput.forEach(function (element) {
    if (element.value !== '' && element.name !== '') {
      // console.log(element.name, '=', element.value)
      url += `${element.name}=${element.value}&`
    }
  })

  radioButtons = document.querySelectorAll('input[type=radio]:checked')
  radioButtons.forEach(function (radioButton) {
    if (radioButton.value !== '' && radioButton.name !== '') {
      // console.log(radioButton.name, '=', radioButton.value)
      url += `${radioButton.name}=${radioButton.value}&`
    }
  })

  // Remove the last "&" character
  url = url.slice(0, -1)

  document.getElementById('debugURL').value = url
  return url
}

function showSelectedImage() {
  // const imageSource = document.getElementsByName('imagesrc').textContent
  // alert(imageSource)
  // if (imageSource === 'internal') {
  //   // Get the selected option value
  const selectedValue = document.getElementById('imageSelect').value
  document.getElementById('imageCard').src = IMAGE_CARD_URL + selectedValue
  // } else {
  //   const selectedValue = document.getElementById('imageurl').value
  //   document.getElementById('imageCard').src = IMAGE_CARD_URL + selectedValue
  // }
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

const updateCardText = () => {
  const cardText = document.getElementById('cardText').value
  document.getElementById('text-inside-card').textContent = cardText
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

  const imageurl = document.getElementById('imageurl')
  imageurl.addEventListener('change', showSelectedImage)

  const soundSelect = document.getElementById('soundSelect')
  const audioPlayer = document.getElementById('audioPlayer')
  soundSelect.addEventListener('change', function () {
    const selectedSoundPath = soundSelect.value
    // alert(selectedSoundPath)
    // const audioSource = document.getElementById(soundSource)
    // const audioSource = selectedSoundPath //document.getElementById(selectedSoundPath)
    audioPlayer.src = SOUND_CARD_URL + selectedSoundPath
    audioPlayer.load()
    audioPlayer.play()
  })

  const imageSource = document.getElementsByName('soundsrc')
  imageSource.forEach(function (element) {
    element.addEventListener('change', function () {
      // const selectedImage = element.value
      document.getElementById('soundurl').classList.toggle('element-hidden')
      document.getElementById('soundSelect').classList.toggle('element-hidden')
    })
  })

  const soundSource = document.getElementsByName('imagesrc')
  soundSource.forEach(function (element) {
    element.addEventListener('change', function () {
      // const selectedImage = element.value
      document.getElementById('imageurl').classList.toggle('element-hidden')
      document.getElementById('imageSelect').classList.toggle('element-hidden')
    })
  })

  // const cardText = document.getElementById('cardText')
  cardText.addEventListener('keyup', function () {
    updateCardText()
  })
})

updateCardText()
updateURL()
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
  const imageSource = document.getElementsByName('imagesrc')

  let imageSourceVal = ''
  imageSource.forEach(function (element) {
    if (element.checked) {
      imageSourceVal = element.value
    }
  })
  if (imageSourceVal === 'internal') {
    // Get the selected option value
    const selectedValue = document.getElementById('imageSelect').value
    document.getElementById('imageCard').src = IMAGE_CARD_URL + selectedValue
  } else {
    const selectedValue = document.getElementById('imageurl').value
    document.getElementById('imageCard').src = selectedValue
  }
}

function playSoundSelected() {
  const soundSource = document.getElementsByName('soundsrc')

  let soundSourceVal = ''
  soundSource.forEach(function (element) {
    if (element.checked) {
      soundSourceVal = element.value
    }
  })

  if (soundSourceVal === 'internal') {
    const soundSelect = document.getElementById('soundSelect')
    const audioPlayer = document.getElementById('audioPlayer')
    const selectedSoundPath = soundSelect.value
    audioPlayer.src = SOUND_CARD_URL + selectedSoundPath
    audioPlayer.load()
    audioPlayer.play()
  } else {
    const selectedValue = document.getElementById('soundurl').value
    const audioPreview = document.getElementById('audioPreview')
    // if (selectedValue.includes('youtube')) {
    //   audioPreview.innerHTML = `
    //   <iframe
    //         id="videoPlayer"
    //         class="hidden"
    //         width="460"
    //         height="80"
    //         src="${selectedValue}"
    //         title=""
    //         frameborder="0"
    //         autoplay
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         ></iframe>`
    // } else {
    //   audioPreview.innerHTML = `
    //   <audio
    //         id="audioPlayer"
    //         class="hidden"
    //         controls
    //         autoplay
    //         >
    //         <source src="${selectedValue}" type="audio/mpeg">
    //         Your browser does not support the audio element.
    //   </audio>`
    // }

    // Get the selected option value
    // const selectedValue = document.getElementById('soundurl').value
    // document.getElementById('audioPlayer').src = selectedValue
    const audioPlayer = document.getElementById('audioPlayer')
    // alert(selectedValue)
    // audioPlayer.type = 'audio/mpeg'
    audioPlayer.src = selectedValue
    audioPlayer.load()
    audioPlayer.play()
  }
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
  // 20 lines max
  const cardText = document.getElementById('cardText').value
  let cardTextLines = ''
  // text-overlay-text
  cardText.split('\n').forEach(function (line, index) {
    cardTextLines += `<span class="text-overlay-text">${line}</span><br>`
  })
  document.getElementById('text-inside-card').innerHTML = cardTextLines

  // const cantLines = cardText.split('\n').length

  // let textOverlayElement = document.getElementsByClassName('text-overlay')
  // console.log(textOverlayElement, `${30 * cantLines} px`)
  // textOverlayElement[0].style.height = `${30 * cantLines} px`

  // const a = $('.text-overlay')
  // console.log(a)
  // a.css('height', `${30 * cantLines} px`)
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
  soundSelect.addEventListener('change', playSoundSelected)

  const soundurl = document.getElementById('soundurl')
  soundurl.addEventListener('change', playSoundSelected)

  const soundSource = document.getElementsByName('soundsrc')
  soundSource.forEach(function (element) {
    element.addEventListener('change', function () {
      // const selectedImage = element.value
      document.getElementById('soundurl').classList.toggle('element-hidden')
      document.getElementById('soundSelect').classList.toggle('element-hidden')
      playSoundSelected()
    })
  })

  const imageSource = document.getElementsByName('imagesrc')
  imageSource.forEach(function (element) {
    element.addEventListener('change', function () {
      // const selectedImage = element.value
      document.getElementById('imageurl').classList.toggle('element-hidden')
      document.getElementById('imageSelect').classList.toggle('element-hidden')
      showSelectedImage()
    })
  })

  // const cardText = document.getElementById('cardText')
  cardText.addEventListener('keyup', function () {
    updateCardText()
  })
})

updateCardText()
updateURL()

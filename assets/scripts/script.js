const PLAYURL = 'v'
const IMAGE_CARD_URL = 'assets/images/options/'
const SOUND_CARD_URL = 'assets/sounds/'
const examplesText = [
  'Wishing you a Christmas filled with laughter and joy, dear friend. May your holidays sparkle with moments of love and happiness!',
  'Friends like you make the season bright. Merry Christmas with all my heart!',
  'To a special friend, may your Christmas be merry and your New Year be bright!',
  'Cheers to the wonderful friendship we share! Wishing you a delightful Christmas!',
  'May your Christmas be wrapped in happiness and tied with love. Happy Holidays, my friend!',

  'To my wonderful family, may our home be filled with love and our hearts with joy this Christmas.',
  'Merry Christmas to my family, the greatest gift of all. Love and joy to you all.',
  'Family is the true spirit of Christmas, and you make mine complete. Warm wishes to you!',
  'Blessed to spend another Christmas with the most precious family. Love you all!',
  'May our family Christmas be filled with laughter, love, and cheer. Merry Christmas!',

  'This Christmas, may your family be functional and all your batteries be included. Merry Christmas!',
  'Remember, Santa is watching. It\u2019s not too late to be good\u2026or at least good at pretending!',
  'Eat. Drink. Be Merry. Have a wonderfully overindulgent Christmas!',
  'May your Christmas be filled with joyful noise and lots of presents. But mostly presents.',
  'This year, I decided to put mistletoe in my back pocket so all the people I don\u2019t like can kiss my\u2026',

  'Ah, Christmas: A time for joy, love, and pretending to like the gifts. Enjoy!',
  'Merry Christmas! Here\u2019s to a day of awkward family interactions and overeating.',
  'Ho Ho Hope you find more happiness this Christmas than in the Christmas bonus you didn\u2019t get.',
  'Wishing you a Merry Christmas and a \u2018new year, new me\u2019 that actually lasts.',
  'Christmas: the only time of year you can sit in front of a dead tree eating candy out of socks. Enjoy!',
]

const examplesImages = [
  'christmas-card-1843552_1280.jpg',
  'christmas-tree-2928142_1280.jpg',
  'red-2892235_1280.jpg',
  'wood-1776060_1280.jpg',
  'christmas-1869902_1280.jpg',
  'christmas-2933008_1280.jpg',
  'christmas-3009949_1280.jpg',
  'christmas-3026685_1280.jpg',
  'christmas-3735928_1280.jpg',
  'christmas-3864552_1280.jpg',
  'christmas-tree-574742_1280_yellow.jpg',
  'church-648430_1280.jpg',
  'moon-31665_1280.jpg',
  'north-star-2869817_1280.jpg',
  'snowman-321034_1280.jpg',
]

const initCard = () => {
  // Add a random background image from the "assets" folder
  const posImage = Math.floor(Math.random() * examplesImages.length)
  const randomImage = examplesImages[posImage]
  const selectElement = document.getElementById('imageSelect')
  selectElement.selectedIndex = posImage
  showSelectedImage()
  // document.getElementById('imageCard').src = IMAGE_CARD_URL + randomImage

  // Add a random text from the "examplesText" array
  const randomText =
    examplesText[Math.floor(Math.random() * examplesText.length)]
  document.getElementById('cardText').value = randomText
  updateURL()
}

const urlEncode = (data) => {
  return Object.keys(data)
    .map(function (key) {
      return [key, data[key]].map(encodeURIComponent).join('=')
    })
    .join('&')
}

const updateURL = () => {
  let url = `${PLAYURL}?`
  const urlParamsObject = {}

  const elementsInput = document.querySelectorAll('.form-control')
  elementsInput.forEach(function (element) {
    if (element.value !== '' && element.name !== '') {
      // console.log(element.name, '=', element.value)
      urlParamsObject[element.name] = element.value
      // url += `${element.name}=${element.value}&`
    }
  })

  radioButtons = document.querySelectorAll('input[type=radio]:checked')
  radioButtons.forEach(function (radioButton) {
    if (radioButton.value !== '' && radioButton.name !== '') {
      // console.log(radioButton.name, '=', radioButton.value)
      // url += `${radioButton.name}=${radioButton.value}&`
      urlParamsObject[radioButton.name] = radioButton.value
    }
  })

  // Remove the last "&" character
  // url = url.slice(0, -1)

  let domainURL = window.location.href
    .replace('#', '')
    .replace('index.html', '')
  domainURL = domainURL.split('?')[0]
  url = domainURL + PLAYURL + '?' + urlEncode(urlParamsObject)

  document.getElementById('shareLink').value = url
  return url
}

function updateTextPosition() {
  // Get the selected text position
  var selectedPosition = document.querySelector(
    'input[name="tpos"]:checked'
  ).value
  // Get the text overlay element
  var textOverlay = document.querySelector('.text-overlay')

  // Apply new styles based on the selected position
  switch (selectedPosition) {
    case 'top':
      textOverlay.style.position = 'absolute'
      textOverlay.style.top = '30%'
      break
    case 'middle':
      textOverlay.style.position = 'absolute'
      textOverlay.style.top = '60%'
      textOverlay.style.transform = 'translateY(-50%)' // Center vertically
      break
    case 'bottom':
      textOverlay.style.position = 'absolute'
      textOverlay.style.top = '85%' // You may adjust the default bottom position
      break
  }
}

// function copyLink(link) {
//   var copyText = document.getElementById('shareLink')
//   //copyText.value = link

//   /* Select the text field */
//   copyText.select()
//   copyText.setSelectionRange(0, 99999) /* For mobile devices */

//   /* Copy the text inside the text field */
//   document.execCommand('copy')

//   /* Alert the copied text */
//   alert('Copied the link to share!!!')
// }

function copyLink() {
  var copyText = document.getElementById('shareLink').value;
  var socialLinks = document.querySelectorAll('.social-links a');

  // Update href attribute for each social media link
  socialLinks.forEach(function (link) {
    var socialMedia = link.getAttribute('aria-label').replace('Share on ', '').toLowerCase();
    var shareUrl = generateShareUrl(copyText, socialMedia);
    link.href = shareUrl;
  });

  // Select and copy the text field
  document.getElementById('shareLink').select();
  document.getElementById('shareLink').setSelectionRange(0, 99999);
  document.execCommand('copy');

  // Alert the copied text
  alert('Copied the link to share!');
}

// Function to generate shareable URL based on social media platform
function generateShareUrl(url, socialMedia) {
  // Add logic to generate the shareable URL for each social media platform
  // For simplicity, I'm assuming each social media platform supports appending the URL
  return url + '&platform=' + socialMedia;
}


function preview() {
  var copyText = document.getElementById('shareLink')
  window.open(copyText.value, '_blank')
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
  const cardText = document.getElementById('cardText').value
  let cardTextLines = ''
  // text-overlay-text
  cardText.split('\n').forEach(function (line, index) {
    cardTextLines += `<span class="text-overlay-text">${line}</span><br>`
  })
  document.getElementById('text-inside-card').innerHTML = cardTextLines
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

  const textPosition = document.getElementsByName('tpos')
  textPosition.forEach(function (element) {
    element.addEventListener('change', function () {
      updateTextPosition()
    })
  })

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

initCard()
updateCardText()

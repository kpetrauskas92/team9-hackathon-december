// Function to retrieve URL parameters
// play.js?imageopt=christmas-tree-2928142_1280.jpg&sname=Robert&rname=Petra&sound=enchanted-chimes-177906.mp3&ctext=Merry%20Christmas%0A1%0A2%0A3&video=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaAkMkVFwAoo%26ab_channel%3DMariahCareyVEVO&tpos=top&imagesrc=internal&soundsrc=internal
// external sound example: http://51340200.swh.strato-hosting.eu/enchanted-chimes.mp3

const IMAGE_URL = '../assets/images/options/'
const SOUND_URL = '../assets/sounds/'
let paramsObj = {}
const PLAYURL = 'card.html'

const updateCardWithText = (cardText) => {
  let cardTextLines = ''
  // text-overlay-text
  cardText.split('\n').forEach(function (line, index) {
    cardTextLines += `<span class="text-overlay-text">${line}</span><br>`
  })
  document.getElementById('text-inside-card').innerHTML = cardTextLines
}

function nextCard() {
  //   processParameters()
  //   console.log(paramsObj)
  //   const nextURL = getURL()
  //   alert(paramsObj.imageopt)
  //   document.getElementById('card1').src =
  //     '../assets/images/options/' + paramsObj.imageopt
  setInterval(function () {
    window.location.href = PLAYURL + window.location.search
  }, 2000)
}

const getURL = () => {
  let url = ``
  const urlParamsObject = {}

  // get all the parameters from URL
  const urlParams = window.location.search
    ? window.location.search.split('?')[1].split('&')
    : []

  console.log(urlParams)

  if (urlParams.length === 0) {
    return ''
  }

  // Iterate over the parameters and create list item elements
  urlParams.forEach(function (param) {
    const pair = param.split('=')
    const key = decodeURIComponent(pair[0])
    const value = decodeURIComponent(pair[1] || '')
    urlParamsObject[key] = value
    url += `${key}=${value}&`
  })

  // Remove the last "&" character
  url = url.slice(0, -1)

  let domainURL = window.location.href
    .replace('#', '')
    .replace('index.html', '')
    .replace('edit.html', '')
  domainURL = domainURL.split('?')[0]

  url = PLAYURL + '?' + encodeURIComponent(url)

  // document.getElementById('shareLink').value = url

  return url
}

function showCard() {
  // Param tpos - top, middle or bottom of the text inside the card

  //if (paramsObj.tpos === 'top') {
  //  textOverlay.classList.add('text-overlay-top')
  //} else if (paramsObj.tpos === 'middle') {
  //  textOverlay.classList.add('text-overlay-middle')
  //} else if (paramsObj.tpos === 'bottom') {
  //  textOverlay.classList.add('text-overlay-bottom')
  //}

  const video = document.getElementById('video-background')
  if (video) {
    video.innerHTML = ''
    video.classList.add('element-hidden')
  }

  if (paramsObj.tpos) {
    const textOverlay = document.getElementById('text-inside-card')
    switch (paramsObj.tpos) {
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

  // Param imagesrc - internal or external
  const image = document.getElementById('imageCard')
  if (image) {
    // Update the image source
    if (paramsObj.imagesrc === 'external' && paramsObj.imageurl) {
      image.src = paramsObj.imageurl
    } else if (paramsObj.imagesrc === 'internal' && paramsObj.imageopt) {
      image.src = IMAGE_URL + paramsObj.imageopt
    }
    // Update the image source
    const imageContainer = document.getElementById('image-background')
    imageContainer.classList.remove('element-hidden')

    // Update the text inside the card
    //const text = document.getElementById('text-inside-card')
    //text.innerHTML = paramsObj.ctext.replace(/\n/g, '<br />')
    updateCardWithText(paramsObj.ctext)
  }

  // Play the sound
  if (paramsObj.sound) {
    //var sound = new Audio('assets/sounds/' + paramsObj.sound)
    const soundCard = document.getElementById('soundCard')
    soundCard.classList.remove('element-hidden')
    if (paramsObj.soundsrc === 'external' && paramsObj.soundurl) {
      soundCard.src = paramsObj.soundurl
    } else if (paramsObj.soundsrc === 'internal' && paramsObj.sound) {
      soundCard.src = SOUND_URL + paramsObj.sound
    }

    soundCard.load()
    soundCard.loop = true
    soundCard.play()
  }
}

function showVideo() {
  // Update the video source
  const videosrc = paramsObj.video // '&autoplay=1&mute=1&loop=1'
  const youtubeParam = videosrc.split('v=')[1]
  const youtubeId = youtubeParam.split('&')[0]

  const video = document.getElementById('video-background')
  video.innerHTML = `
            <iframe
            width="100%"
            height="350px"
            src="https://www.youtube.com/embed/${youtubeId}?si=KQN0habhnPnsxZ_l&amp;controls=1&autoplay=1&mute=1&loop=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
            </iframe>
            <button onclick="showCard()">Show Card</button>
            `

  video.classList.remove('element-hidden')
  // const videoCard = document.getElementById('videoCard')
  // videoCard.src = paramsObj.video //+ '&autoplay=1&mute=1&loop=1&playlist='

  // videoCard.load()
  // videoCard.loop = true
  //videoCard.play()
}

function processParameters() {
  // Get the current URL
  var url = window.location.href

  // Find the question mark (?) in the URL
  var index = url.indexOf('?')
  if (index !== -1) {
    // Get the query string after the question mark
    var queryString = url.slice(index + 1)

    // Split the query string into key-value pairs
    var params = queryString.split('&')

    // Object to store the parameters
    // var paramsObj = {}

    // Iterate over the key-value pairs and store them in the object
    params.forEach(function (param) {
      var pair = param.split('=')
      var key = decodeURIComponent(pair[0])
      var value = decodeURIComponent(pair[1] || '')
      paramsObj[key] = value
    })

    // showParameters(paramsObj)
  }
}

// Function to display the parameters in the container
function showParameters(params = paramsObj) {
  var container = document.getElementById('params-container')

  // Create an unordered list
  var ul = document.createElement('ul')

  // Iterate over the parameters and create list item elements
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var li = document.createElement('li')
      li.textContent = key + ': ' + params[key]
      ul.appendChild(li)
    }
  }

  // Append the list to the container
  container.appendChild(ul)
}

// Call the function to retrieve and display parameters when the page loads
processParameters()
if (window.location.href.includes('card.html')) {
  if (paramsObj.video) {
    showVideo(paramsObj)
  }

  if (!paramsObj.video) {
    showCard(paramsObj)
  }
}

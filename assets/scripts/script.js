function showSelectedImage() {
  // Get the selected option value
  var selectedValue = document.getElementById("imageSelect").value;

  // Hide all images
  var allImages = document.querySelectorAll('.choose-image img');
  allImages.forEach(function (image) {
      image.style.display = 'none';
  });

  // Show the selected image
  var selectedImage = document.getElementById(selectedValue);
  if (selectedImage) {
      selectedImage.style.display = 'block';
  }
}

const soundSelect = document.getElementById('soundSelect');
const audioPlayer = document.getElementById('audioPlayer');

soundSelect.addEventListener('change', function () {
  const selectedSoundPath = soundSelect.value;
  const audioSource = document.getElementById(selectedSoundPath);
  audioPlayer.src = audioSource.src;
  audioPlayer.load();
  audioPlayer.play();
});
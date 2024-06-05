function adaptBackgroundImage() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const aspectRatio = windowWidth / windowHeight
  const background = document.querySelector('.background')

  if (aspectRatio > 1.75) {
    background.style.backgroundImage = 'url("/assets/images/landscape_1x2.jpg")'
  } else if (aspectRatio > 0.80) {
    background.style.backgroundImage = 'url("/assets/images/portrait_1x1.jpg")'
  } else {
    background.style.backgroundImage = 'url("/assets/images/portrait_2x1.jpg")'
  }
}

window.addEventListener('resize', adaptBackgroundImage);

window.addEventListener('DOMContentLoaded', function () {
  window.dispatchEvent(new Event('resize'))
})
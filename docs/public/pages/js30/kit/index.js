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

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
  let key = document.querySelector(`.key[data-key="${ev.keyCode}"]`)
  if(isMobileDevice()){
    key = document.querySelector(`.key-mobile[data-key="${ev.keyCode}"]`)
  }

  if (!audio) return

  audio.currentTime = 0

  audio.play()
  key.classList.add('playing')
}

window.addEventListener('keydown', playSound)

function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return
  ev.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

if (isMobileDevice()) {
  console.log('mobile')
  const keys = document.querySelectorAll('.key')
  const kbd = document.querySelectorAll('kbd')
  keys.forEach(key => {
    key.classList.add('key-mobile')
    key.classList.remove('key')

    key.addEventListener('click', function (ev) {
      const kbdKey = key.dataset.key

      const audio = document.querySelector(`audio[data-key="${kbdKey}"]`)
      if (!audio) return
      audio.currentTime = 0
      audio.play()
      key.classList.add('playing')

      setTimeout(() => {
        key.classList.remove('playing')
      }, 10)
    })
  })
  kbd.forEach(k => {
    k.classList.add('kbd-mobile')
    k.classList.remove('kbd')
  })
}
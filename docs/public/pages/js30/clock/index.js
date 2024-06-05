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

const secondHand = document.querySelector('.hand-second')
const minuteHand = document.querySelector('.hand-minute')
const hourHand = document.querySelector('.hand-hour')

function setDate(){
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegree = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegree}deg)`

  const mins = now.getMinutes()
  const minsDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minuteHand.style.transform = `rotate(${minsDegree}deg)`

  const hours = now.getHours()
  const hoursDegress = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`
}

setInterval(setDate, 1000)

setDate()
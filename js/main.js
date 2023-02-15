// Элементы страницы
const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const preloader = document.querySelector('#preloader')

// Расчет даты
const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// Установка года на страницу
year.innerText = currentYear + 1

function updateCounter() {
   const currentTime = new Date()
   const diff = nextYear - currentTime

   // Перевод в дни
   const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
   // Перевод в часы
   const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
   // Перевод в минуты
   const minutesLeft = Math.floor(diff / 1000 / 60) % 60
   // Перевод в секунды
   const seconsLeft = Math.floor(diff / 1000) % 60

   days.innerText = daysLeft
   hours.innerText = hoursLeft
   minutes.innerText = minutesLeft
   seconds.innerText = seconsLeft
}

setInterval(updateCounter, 1000)

setTimeout(function () {
   preloader.remove()
   countdown.style.display = 'flex'
}, 1000)


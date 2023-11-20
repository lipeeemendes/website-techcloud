const secondsHands = document.querySelector('.hands.seconds')
const minutesHands = document.querySelector('.hands.minutes')
const hoursHands = document.querySelector('.hands.hours')

const setRotate = (element, rotatePercentage) => {
	element.style.setProperty('--degrees', rotatePercentage * 360)
}

const setClock = () => {
	const currentDate = new Date()

	const secondPercentage = currentDate.getSeconds() / 60
	const minutesPercentage = (secondPercentage + currentDate.getMinutes()) / 60
	const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12

	setRotate(secondsHands, secondPercentage)
	setRotate(minutesHands, minutesPercentage)
	setRotate(hoursHands, hoursPercentage)
}

setClock()
setInterval(setClock, 1000)

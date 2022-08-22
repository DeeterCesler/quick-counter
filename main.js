const el = document.getElementById('num')
const goalValue = el.innerText
console.log('goal')
console.log(goalValue)

// if no time attr given, defaul to 2 seconds
const time = parseFloat(el.getAttribute('time')) || 2
const milliseconds = time * 1000

const num = parseInt(el.innerText)

// if num > time in milliseconds, divided it by # of milliseconds and increment it
// each time by that divider (checking and making sure the times line up)
let incrementor = 0
el.innerText = incrementor
if (num >= milliseconds) {
  const chunkedIncrementor = parseInt(num / (time * 100))
  setInterval(() => {
    if (incrementor < num) {
      incrementor += chunkedIncrementor
      el.innerText = incrementor
      if (incrementor > goalValue) {
        //   console.log('test33')
        //   console.log(el.innerText)
        //   console.log(goalValue)
        el.innerText = goalValue
      }
    }
  }, 10)
} else if (num < milliseconds) {
  const incrementMilliseconds = milliseconds / num
  setInterval(() => {
    if (incrementor < num) {
      ++incrementor
      el.innerText = incrementor
    }
  }, incrementMilliseconds)
}

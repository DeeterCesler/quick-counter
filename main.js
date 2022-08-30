const el = document.getElementById('num')
const goalValue = el.innerText

// if no time attr given, defaul to 2 seconds
const seconds = parseFloat(el.getAttribute('time')) || 2
const milliseconds = seconds * 1000

const num = parseInt(el.innerText)

/*
 *  If num > time in milliseconds, divided it by # of milliseconds and increment it
 *  each time by that divider (checking and making sure the times line up).
 *
 *  Also, most browsers can't process setInterval faster than 16 milliseconds per interval,
 *  so to account for this I set interval time 16 and divide the incrementor by that.
 */

let incrementor = 0
el.innerText = incrementor
const browserLimitation = 16
const timeDivider = 1000 / browserLimitation

if (num >= milliseconds / browserLimitation) {
  const chunkedIncrementor = parseInt(num / (seconds * timeDivider))
  setInterval(() => {
    if (incrementor < num) {
      incrementor += chunkedIncrementor
      el.innerText = incrementor
      if (incrementor > goalValue) {
        el.innerText = goalValue
      }
    }
  }, browserLimitation)
} else {
  const incrementMilliseconds = milliseconds / num
  console.log(incrementMilliseconds)
  setInterval(() => {
    if (incrementor < num) {
      ++incrementor
      el.innerText = incrementor
    }
  }, browserLimitation)
}

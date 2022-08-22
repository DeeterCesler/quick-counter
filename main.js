const el = document.getElementById('num')

setTimeout(() => {
  const num = parseInt(el.innerText)

  console.log(num)
  // 3000 milliseconds = 3 seconds

  // if num > 3000, divided it by 3 thousand and increment it
  // each time by that dividor (checking and making sure it doesn't go over 3k)
  let incrementor = 0
  if (num >= 3000) {
    setInterval(() => {
      //   console.log('hi')
      if (incrementor < num) {
        ++incrementor
        el.value = incrementor
      }
    }, 1)
  } else if (num < 3000) {
    const incrementMilliseconds = 3000 / num
    console.log('hi2')
    setInterval(() => {
      if (incrementor < num) {
        ++incrementor
        el.innerText = incrementor
      }
    }, incrementMilliseconds)
  }
}, 1000)

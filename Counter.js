import React, { useEffect, useState, useRef } from 'react'

export default function Counter(props) {
  const [number, setNum] = useState(0)
  const [renderCount, setCount] = useState(0)
  const reffer = useRef(0)

  const el = props.children
  const goalValue = parseInt(el)

  // take el.innerText
  // run the function against it
  // reset innertext as what I output

  useEffect(() => {
    console.log('!')
    increment()
  }, [])

  const increment = () => {
    console.log('ciao bella!')
    console.log('goalValue')
    console.log(goalValue)
    // setCount(renderCount++)
    // console.log(++renderCount)
    // if no time attr given, default to 2 seconds
    const seconds = parseFloat(props.time) || 2
    const milliseconds = seconds * 1000

    /*
     *  If goalValue > time in milliseconds, divided it by # of milliseconds and increment it
     *  each time by that divider (checking and making sure the times line up).
     *
     *  Also, most browsers can't process setInterval faster than 16 milliseconds per interval,
     *  so to account for this I set interval time 16 and divide the incrementor by that.
     */

    let incrementor = 0
    reffer.current = incrementor
    const browserLimitation = 16
    const timeDivider = 1000 / browserLimitation

    // If the number is huge and needs to count quickly
    if (goalValue >= milliseconds / browserLimitation) {
      console.log('cazzo')
      const chunkedIncrementor = parseInt(goalValue / (seconds * timeDivider))
      const counter = setInterval(() => {
        if (incrementor < goalValue) {
          incrementor += chunkedIncrementor
          setNum(Number(incrementor).toLocaleString())
          if (incrementor >= goalValue) {
            setNum(Number(goalValue).toLocaleString())
            clearInterval(counter)
          }
        }
      }, browserLimitation)
    } else {
      console.log('ma donna')

      // If the number is tiny and it needs to count slowly
      const incrementMilliseconds = milliseconds / goalValue
      console.log('-1')
      const counter = setInterval(() => {
        console.log('0')
        if (incrementor < goalValue) {
          ++incrementor
          console.log('incre')
          console.log(incrementor)
          setNum(Number(incrementor).toLocaleString())
          if (incrementor >= goalValue) {
            console.log('.......')
            setNum(Number(goalValue).toLocaleString())
            clearInterval(counter)
          }
        }
      }, incrementMilliseconds)
    }
  }

  return <span ref={reffer}>{number}</span>
}

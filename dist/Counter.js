import React, { useEffect, useState, useRef } from 'react';
export default function Counter(props) {
  const [number, setNum] = useState(0);
  const ref = useRef(0);
  const el = props.children;
  const goalValue = parseInt(el); // take el.innerText
  // run the function against it
  // reset innertext as what I output

  useEffect(() => {
    increment();
  }, []);

  const increment = () => {
    // if no time attr given, default to 2 seconds
    const seconds = parseFloat(props.time) || 2;
    const milliseconds = seconds * 1000;
    /*
     *  If goalValue > time in milliseconds, divided it by # of milliseconds and increment it
     *  each time by that divider (checking and making sure the times line up).
     *
     *  Also, most browsers can't process setInterval faster than 16 milliseconds per interval,
     *  so to account for this I set interval time 16 and divide the incrementor by that.
     */

    let incrementor = 0;
    ref.current = incrementor;
    const browserLimitation = 16;
    const timeDivider = 1000 / browserLimitation; // If the number is huge and needs to count quickly

    if (goalValue >= milliseconds / browserLimitation) {
      const chunkedIncrementor = parseInt(goalValue / (seconds * timeDivider));
      const counter = setInterval(() => {
        if (incrementor < goalValue) {
          incrementor += chunkedIncrementor;
          setNum(Number(incrementor).toLocaleString());

          if (incrementor >= goalValue) {
            setNum(Number(goalValue).toLocaleString());
            clearInterval(counter);
          }
        }
      }, browserLimitation);
    } else {
      // If the number is tiny and it needs to count slowly
      const incrementMilliseconds = milliseconds / goalValue;
      const counter = setInterval(() => {
        if (incrementor < goalValue) {
          ++incrementor;
          setNum(Number(incrementor).toLocaleString());

          if (incrementor >= goalValue) {
            setNum(Number(goalValue).toLocaleString());
            clearInterval(counter);
          }
        }
      }, incrementMilliseconds);
    }
  };

  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, number);
}
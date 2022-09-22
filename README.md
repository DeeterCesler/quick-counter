# Quick Counter

You ever see those numbers on landing pages where a company is bragging about number of downlaods, dollars in revenue, or units shipped?

This is a convenient way to plug in number and it'll create that counter for you. All you have to do is the styling.

### React Component

Real simple:
```
import Counter from 'quick-count';

class YourComponent = () => {
    return (
        <h1>Title</h1>
        <p> We have made $<Counter>69,420</Counter> this year.</p>
    )
}

```

If you're using React, just surround whatever number you want this effect applied to with the `<Counter></Counter>` tags. These are effectively just <span> tags, so you can still apply any other styling you want to the number.

E.g. `<h3><Counter>1,000,000</Counter></h3>` will increment a number from 0 to 1,000,000 in a couple of seconds, and the end result in the DOM will look like `<h3><span>1,000,000</span></h3>`

### Or just copy and paste the vanilla script

Copy `main.js` and replace `num` in `getElementById` on line 1 with whatever the ID is of the element you want to count. 

If you want to do this to multiple items on the same page, or do something interesting like only counting when it scrolls into view, you'll have to build your own function for it.

### Possible future iterations

- Add an option where counting doesn't occur until the element is scrolled into view
- Add a time delay if multiple of these are used (e.g. an `order` attribute where `1` starts a half second before `2` which starts a half second before `3`, etc.)

Anything you want added or fixed? Raise it on the [issues page](https://github.com/DeeterCesler/quick-counter/issues).
# Widget Project - Hooks

## Event Bubbling

On a click (or other) event this bubbles up through all the elements on the DOM, checking for other handlers.
CAREFUL: Event listeners wired up with `addEventListener` will be called before react listeners.

## useRef

```
const ref = useRef();
...
return (
  <div ref={ref} ...
)
```
`ref.current` gives us the DOM element.


## useState

```javascipt
import React, { useState } from 'react';

const [ activeIndex, setActiveIndex ] = useState(0);

activeIndex; // 0
setActiveIndex(10);
activeIndex; // 10

```

## useEffect
Hooks replacement for lifecycle methods, these run in three ways.

```
useEffect(() => {
  // do something
}, 

)
```
If second arguement is
- empty then run *after* initial render and every rerender
- [] then run at initial render
- [data] then run at inital render and every rerender if the data has changed

The only thing you are allowed to return from useEffect is another function. 
This only gets involked on the next rerender, including if the component is removed from the view, so it is a perfect place to put clean up logic.

## Timeouts

Set a delay with the syntax
``` javascript
setTimeout(() => {
  // do something
  , 100 })
```
this function returns an id which allows you to cancel the timer with `clearTimeout(id)`


## Tutorial
1. Build an accordion with hooks
2. Build a wiki search application 
3. Build a dropdown menu with options as props

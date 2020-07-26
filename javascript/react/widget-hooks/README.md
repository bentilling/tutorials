# Widget Project - Hooks

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
This only gets involked on the next rerender.
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

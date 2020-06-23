# JSX Project

## Goal
To understand the basics of JSX and some common pitfalls and best practices 

## Tutorial Steps

1. Delete out all folders in src
2. Recreate index.js
 - import react and reactdom
 - create a function based react component that returns some text.
 - Render react component
4. Create a label, input and button
5. Convert button inline style html to JSX
6. Set button text from variable outside return 

## Learnings

- use className not class due to keyword clash (however 'nowadays' this does actually still work)
- You cannot put a raw js object inside JSX if it will be rendered as text - you will get a 'Object are not valid as a React child' error 
- Check console for unexpected errors (e.g. in example above with 'for')

#### Inline styles
```html
<button style="background-color: blue; color: white;">Submit</button>
```

in JSX is
```html
<button style={{ 
  backgroundColor: 'blue',
  color: 'white'
  }}>Submit</button>
```

- The outer curly brace is a reference to a js variable, the second is a js object.
- Dashes in style names are removed and become camelcase
- The arguments are strings

#### Conventions
Use " " for strings in JSX and ' ' for non-JSX properties

Returning multiline JSX
```javascript
return (
  <div>
    <label>Some Label</label>
  </div>
);
```

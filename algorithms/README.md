# Javascript Algorithms and Data Structures

## Problem Solving

Adapted from 'How to solve it'

### Understanding the problem

Ask yourself
1. Can I restate the problem in my own words?
2. What are the inputs for the problem?
  - Are inputs valid? E.g. if the inputs should be a number can they be *any* number?
  - What happens if we are given more or less arguments?
3. What are the outputs for the problem?
4. Can the outputs be determined from the inputs? Do I have enough information to solve?
5. How should I label the important pieces of data?

### Create concrete examples

E.g. for a function that returns counts of characters in a string

1. Start with simple example
```
charCount("aaaa") = {a:4)
charCount("hello") = {h:1, e:1, l:2, o:1)
```
2. Add more complexity
```
charCount("Hello hi") = // should we inlude spaces? Upper and lower?
```
3. Explore empty or invalid imputs

### Break it Down

Explicity write down the steps I need to take.

E.g from example problem above.

``` 
function charCount(str) {
  // do something
  // return object with keys = lowercase alphanumeric characters in the string
}
```
``` 
function charCount(str) {
  // make object to return
  // loop over lowercase string for each character
    // if char is alphanumeric and key in object add one to count
    // if char is alphanumeric and key and exists in object increment by 1
    // if not alphanumeric do nothing
  // return object
}
```

### Solve or Simplify

If there are elements of the problem that are difficult then start coding another part or
simplify the question.

### Look back and refactor

Refactoring Questions
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glace?
- Can you use the result or method for some other problem?
- Can you improve the performance?
- Can you think of other ways to refactor E.g Styleguides
- How have other people solved this problem?


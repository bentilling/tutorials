# Pics Project

An app that lets a user search and term and displays a list of pictures related to that term.

## Learnings

### Controlled vs Uncontrolled Elements

The below is an example of an uncontrolled element, for this input we do not know its value unless we go the DOM.
```javascript
<input type="text" onChange={e => console.log(e.target.value)} />
```
In a React world we always want to know and control elements without interacting directly with the DOM. The below is how we would refactor to be a 'controlled' element.
```javascipt
state = { term: '' };

<input 
  type="text"
  value={ this.state.term }
  onChange={ e => this.setState({term: e.target.value}) } >
```

Notice that we are now using state, so after every setState we are calling render and setting the input value to the same value it already has.
The advantage to this seemingly extra step is that we can easily modify default values or user input, for example capitalising their input.

### Using event handlers

#### Naming Conventions

on(or handle) ElementName WatchedEvent e.g.
- onInputChange
- onFormSubmit
- onIconClick

Call argument 'event' unless using one line arrow function then use 'e'.

#### Context Issues with 'this'

Getting a 'Cannot read property 'state' of undefined' error is likely due to 'this' not referencing the class. There are many ways to solve this, the most common are...

##### Bind

An older way of doing this is to use bind in the constructor

``` javascript
class Component extends React.Component {
  constructor() {
    super(props);

    this.onLabelClick = this.onLabelClick.bind(this);
  }
  onLabelClick(event) {
    ...
  }
}
```

##### Arrow Functions

Using the above method we can call this differently to force the correct value of 'this' without needing to bind in the constructor.

``` javascript
<input onChange={ e => this.onLabelClick(e) }>
``` 
rather than
``` javascript
<input onChange={ this.onLabelClick }>
``` 

Alternatively, we can create the method with ES6 syntax to automatically bind.

``` javascript
onLabelClick = event => {
  ...
}
``` 

### Handling API Responses

#### Promises

Use `then` to trigger a callback when the promise is resolved.

```javascript
axios.get('endpoint', { params: { ... }, headers: { ... } })
  .then(response => console.log(response));
```

#### Async/Await

Attach `async` to the method and `await` to the axios call.

```javascript
async onSearchTerm(term) {
  const reponse = await axios.get('endpoint', 
  { params: { ... }, headers: { ... } });
}
console.log(response);
```




#### Notes

- When passing a method to onChange make sure not to include parenthesis, this will invoke the function on render and not pass the reference as expected
- Use event.preventDefault() to stop forms from trying to reload page
- Make sure you initialise state with appropriate empty variables, so if it will be an array initilaise as `[]` so that a call like `map` will not error out.

## Tutorial

1. Create App, SearchBar and ImageList components in new components directory
2. Add a text input in SearchBar from Semantic UI and format 
3. Ensure that the search bar is a connected element
4. Disable automated form submit 
5. Define a function onSearchSubmit in App component and invoke it from SearxhBar


# Seasons Project

## Learnings

### Class-based Components

```javascript
class App extends React.Component {
  constructor(props) {
    super(props); // calls React.Component constructor
  }
...
  render() { // Mandatory lifecycle method
    return <div>Some Div</div>
  }
}
```

### Rules of State
- Unless you are using hooks only class components can use state
- JS Object that only contains data releveant to the component
- A change in state rerenders the component
  ```javascript
  constructor(props) {
    super(props); // calls React.Component constructor

    this.state = {};
  }
  ```
- State must be initialised on component creation
- State can *only* be updated using ```this.setState({ key: value })```

### Lifecycle Methods

constructor
render
componentDidMount - called after initial render
componentDidUpdate - called after render

## Tutorial Steps

1. Create an class-based 'App' component
2. Create a 'lat' key value in component state
3. Find the users lattitude using
```javascript
window.navigation.geolocation.getCurrentPosition()
```
4. Conditional rendering
- If lattitude returned then show
- If error show error
- otherwise show loading

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'lat': null, 'errorMessage': null };
    
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( { 'lat': position.coords.latitude }),
      err => this.setState( { 'errorMessage': err.message })
    );
  }

  render() {
    return (
      <div>
        { this.state.lat || this.state.errorMessage || 'Loading' }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

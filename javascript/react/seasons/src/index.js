import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';

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

  renderContent() {
      if (this.state.lat) return <SeasonDisplay lat={ this.state.lat } />
      if (this.state.errorMessage) return <h1>{ this.state.errorMessage }</h1>
      return <Spinner message="Awaiting Location Data..."/>
  }
  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

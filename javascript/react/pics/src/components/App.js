import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import api from '../api/unsplash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pics: [] };
  }

  onSearchSubmit = async (term) => {
    const pics = await api.get('/search/photos', {
      params: {
        query: term,
      },
    });
    this.setState({ pics: pics.data.results });
  };

  render() {
    return (
      <div className="ui containter">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList pics={this.state.pics} />
      </div>
    );
  }
}

export default App;

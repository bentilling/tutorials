import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { term } = this.state;
    onSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment" style={{ margin: '10px' }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

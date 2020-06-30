import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const spans = Math.ceil(this.imgRef.current.clientHeight / 10);
    this.setState({ spans });
  };

  render() {
    const { urls, alt_description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.small} alt={alt_description} ref={this.imgRef} />
      </div>
    );
  }
}

export default ImageCard;

import React, { Component } from 'react';
import Loader from './Loader';

class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      displayGif: true,
    };
  }

  componentWillUpdate() {
    const { loading, displayGif } = this.state;
    if (!loading && displayGif) {
      this.setState({ loading: true });
    }
  }

  handleClick = () => {
    this.setState(
      prevState => ({
        displayGif: !prevState.displayGif,
      }),
      () => console.log(this.state),
    );
  };

  imageLoaded = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading, displayGif } = this.state;
    const {
      url, rating, caption, title,
    } = this.props;
    if (!displayGif) {
      return (
        <div style={{ margin: '0 auto', height: '100%' }}>
          <p>Title: {title}</p>
          <p>Rating: {rating}</p>
          <p>Caption: {caption}</p>
          <button onClick={this.handleClick}>Go back to Gif</button>
        </div>
      );
    }
    return (
      <div style={{ margin: '0 auto', height: '100%' }}>
        <Loader loading={loading} />
        <img
          onLoad={this.imageLoaded}
          style={loading ? { display: 'none' } : { height: '75%', width: '30vh' }}
          src={url}
        />
        <button onClick={this.handleClick}>
          {displayGif ? 'See more info' : 'Go back to GIF'}
        </button>
      </div>
    );
  }
}

export default CardImage;

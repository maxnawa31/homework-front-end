import React, { Component } from 'react';
import Loader from './Loader';

class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillUpdate() {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
  }

  imageLoaded = () => {
    this.setState({ loading: false });
  };

  render() {
    return (
      <div style={{ margin: '0 auto', height: '100%' }}>
        <Loader loading={this.state.loading} />
        <img
          onLoad={this.imageLoaded}
          style={this.state.loading ? { display: 'none' } : { height: '75%', width: '30vh' }}
          src={this.props.url}
        />
      </div>
    );
  }
}

export default CardImage;

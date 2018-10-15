import React, { Component } from 'react';
import Loader from './Loader';

class CardImage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentWillUpdate() {
    if(!this.state.loading) {
      this.setState({loading:true})
    }
  }

  imageLoaded  = () => {
    console.log("image loaded")
    this.setState({loading: false})
  }

  render() {
    return (
      <div style={{'margin': '0 auto'}}>
        <Loader loading={this.state.loading}/>
        <img onLoad = {this.imageLoaded} style={this.state.loading ? {'display':'none'} : {}} src = {this.props.url}></img>

      </div>
    )
  }
}

export default CardImage;
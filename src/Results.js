import React, { Component } from 'react';
import SearchGifsForm from './SearchGifsForm';
import ResultsList from './ResultsList';
const API_KEY = '4yetjWpVt4anuGpdPiimW1BmA4CeW6Mh'

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }
  findGifs =  (keyword) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}&limit=5`)
    .then(res => res.json())
    .then(data => this.setState( {results: this.filterData(data.data)}));
  }

  filterData = (data) => {
    return data.map(gifObj => {
      let {id, images, title, url } = gifObj;
      let {height, width} = images.fixed_width;

      let imageObj = {
        height,
        url: images.fixed_width.url,
        width
      };
      let newGifObj = {
        id,
        imageObj,
        title,
        url
      };
      return newGifObj
    })
  }

  render () {
    return (

      <div>
        <SearchGifsForm findGifs={this.findGifs}/>
        <ResultsList results = {this.state.results}/>
      </div>
    )
  }
}
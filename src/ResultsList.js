import React from 'react';
import Loader from './Loader';

function renderGifs(results) {
  if(results.length  === 0) {
    return <Loader/>
  }
  return results.map(gif => {
    let {title} = gif;
    let{url} = gif.imageObj;
    return (
      <div>
        {gif.title}
        <img src ={`${url}`}></img>
      </div>

    )
  })
}


const ResultsList = (props) => {
  let {results} = props;
  return (
    <div>{renderGifs(results)}</div>
  )
}

export default ResultsList;
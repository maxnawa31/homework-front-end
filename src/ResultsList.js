import React from 'react';
import Loader from './Loader';
import { CardContainer, CardSection, CardListContainer } from './CardContainer';
import CardImage from './CardImage'

function renderGifs(results) {
  return results.map(gif => {
    let {title} = gif;
    let{url} = gif.imageObj;
    return (<CardImage url={url}></CardImage>)
  })
}


const ResultsList = (props) => {
  let {results} = props;
  return (
    <CardListContainer>{renderGifs(results)}</CardListContainer>
  )
}

export default ResultsList;
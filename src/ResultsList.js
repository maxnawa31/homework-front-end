import React from 'react';
import Loader from './Loader';
import { CardContainer, CardSection, CardListContainer } from './CardContainer';


function renderGifs(results) {
  if(results.length  === 0) {
    return <Loader/>
  }
  return results.map(gif => {
    let {title} = gif;
    let{url} = gif.imageObj;
    return (
      <CardContainer>
        {gif.title}
        <CardSection>
          <img style={{'margin': '0 auto'}}src ={`${url}`}></img>
        </CardSection>
      </CardContainer>

    )
  })
}


const ResultsList = (props) => {
  let {results} = props;
  return (
    <CardListContainer>{renderGifs(results)}</CardListContainer>
  )
}

export default ResultsList;
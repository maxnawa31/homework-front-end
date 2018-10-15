import React from 'react';
import Loader from './Loader';
import { CardListContainer, CardContainer } from './CardContainer';
import CardImage from './CardImage';

function renderGifs(results) {
  return results.map((gif) => {
    const { title } = gif;
    const { url } = gif.imageObj;
    return (
      <CardContainer>
        <CardImage url={url} />
      </CardContainer>
    );
  });
}

const ResultsList = (props) => {
  const { results } = props;
  return <CardListContainer> {renderGifs(results)} </CardListContainer>;
};

export default ResultsList;

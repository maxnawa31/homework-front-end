import React from 'react';
import Loader from './Loader';
import { CardListContainer, CardContainer } from './StyledCardComponents';
import CardImage from './CardImage';

function renderGifs(results) {
  return results.map((gif) => {
    const {
      title, rating, id, caption,
    } = gif;
    const { url } = gif.imageObj;
    return (
      <CardContainer>
        <CardImage title={title} rating={rating} id={id} caption={caption} url={url} />
      </CardContainer>
    );
  });
}

const ResultsList = (props) => {
  const { results } = props;
  return <CardListContainer> {renderGifs(results)} </CardListContainer>;
};

export default ResultsList;

import React, { useEffect, useState } from 'react';
import { fetchReviews } from 'services/api';
import { Container,List,Item,Title,Text } from './Reviews.styled.js';

export default function Reviews({movieId}) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => setReviews(results))
  }, [movieId]);

  const lengthRev = reviews && reviews.length;
  return (
    <Container>
      <List>
        {lengthRev > 0 &&  reviews.map((el) => (
          <Item key={el.id}>
            <Title>Author: {el.author}</Title>
            <Text>{el.content}</Text>
        </Item>
        ))}
      </List>
      {reviews && reviews.length === 0 && <Title>We don't have any reviews for this movie.</Title>}
    </Container>
  )
}

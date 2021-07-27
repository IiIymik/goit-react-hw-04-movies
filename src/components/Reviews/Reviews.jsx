import React, { useEffect, useState } from 'react';
import {useHistory, useLocation } from 'react-router-dom'

import { fetchReviews } from 'services/api';
import { Container,List,Item,Title,Text } from './Reviews.styled.js';

export default function Reviews({ movieId }) {
  const history = useHistory();
  const location = useLocation();
  // console.log("🚀 ~ file: Reviews.jsx ~ line 10 ~ Reviews ~ location", location)
  console.log("🚀 ~ file: Reviews.jsx ~ line 9 ~ Reviews ~ history", history.location.state)
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

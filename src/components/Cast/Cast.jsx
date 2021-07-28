import React, { useEffect, useState } from 'react';
import { fetchCast } from 'services/api';
import { Container, List, Item, Image, Name, Text } from './Cast.styled.js';

const notFound = '/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg'

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then(({cast}) => setCast(cast));
  },[movieId])

  return (<Container>
    <List>
    {cast && cast.map((el) => (
      <Item key={el.id}>
        <Image src={`https://image.tmdb.org/t/p/w200${el.profile_path ?? notFound}`} alt={el.name} />
      <Name>{el.name}</Name>
      <Text>Character: {el.character}</Text>
      </Item>
    ))}
    </List>
  </Container>)
}



import React,{useEffect, useState} from 'react'
import {fetchCast} from 'services/api';

// const NotFoundImg = '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then(({cast}) => setCast(cast));
  },[movieId])

  return (<>
    {cast && cast.map((el) => (
      <div key={el.id}>
      <img src={`https://image.tmdb.org/t/p/w200${el.profile_path}`} alt={el.name} />
      <h2>{el.name}</h2>
      <p>{el.character}</p>
    </div>
    ))}
  </>)
}



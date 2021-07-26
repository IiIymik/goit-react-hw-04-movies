import React,{useState} from 'react';
import {Form,Button,Title,Input} from './MoviesPage.styled';;

export default function MoviesPage() {
  const [movie, setMovie] = useState(null);

    const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.elements.searchingImages.value)
  };
  return (
    <Form onSubmit={handleSearch}>
    <Button type="submit">
      <Title>Search</Title>
    </Button>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search movie"
      name="searchMovie"
      value={movie}
    />
  </Form>
  )
}

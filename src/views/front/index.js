import React, { useState } from 'react';
import { MainContainer, Container } from './styles';
import { TextInput } from '../../ui/textinput';
import { Button } from '../../ui/button';

export const FrontView = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  return (
    <MainContainer>
      <Container>
        <TextInput
          labelText="Search by Author"
          onChangeEvent={(ev) => setAuthor(ev.target.value)}
          type="text"
          value={author}
        />

        <TextInput
          labelText="Search by Title"
          onChangeEvent={(ev) => setTitle(ev.target.value)}
          type="text"
          value={title}
        />

        <Button width="150px">Search</Button>
      </Container>
    </MainContainer>
  );
};

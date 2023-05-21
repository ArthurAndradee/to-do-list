import React from 'react';

import { Container, Input, SearchButton } from './styles';

const CreateTaskContainer: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Your task here"/>
      <SearchButton>Push task</SearchButton>
    </Container>
  );
}

export default CreateTaskContainer;
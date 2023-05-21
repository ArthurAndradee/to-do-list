import React from 'react';

import { useState } from 'react';

import { 
  Container, 
  Header, 
  CreateTaskButton, 
  Title,
  CreateTaskContainer,
  Input,
  SearchButton
 } 
  from './styles';

import Task from '../task';

const Layout: React.FC = () => {
  const [showContainer, setShowContainer] = React.useState(false)

  return (
      <Container>
        <Header>
            <Title>My tasks</Title>
            <CreateTaskContainer>
              <Input placeholder="Your task here"/>
              <SearchButton>Push task</SearchButton>
            </CreateTaskContainer>
            <CreateTaskButton>Add new Task +</CreateTaskButton>
        </Header>
            <Task />
      </Container>
  )
}

export default Layout;
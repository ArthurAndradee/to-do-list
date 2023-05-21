import React from 'react';

import { Container, Header } from './styles';
import CreateTaskButton from '../createTaskButton';

import CreateTaskContainer from '../createTaskContainer';

import Task from '../task';

import Title from '../title';

const Layout: React.FC = () => {
  return (
      <Container>
        <Header>
            <Title />
            <CreateTaskContainer />
            <CreateTaskButton/>
        </Header>
            <Task />
      </Container>
  )
}

export default Layout;
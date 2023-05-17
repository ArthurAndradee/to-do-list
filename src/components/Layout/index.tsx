import React from 'react';

import { Container, } from './styles';
import CreateTaskButton from '../createTaskButton';

import Title from '../title';

const Layout: React.FC = () => {
  return (
      <Container>
            <Title />
            <CreateTaskButton />
      </Container>
  )
}

export default Layout;
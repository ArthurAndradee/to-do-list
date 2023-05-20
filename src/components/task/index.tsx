import React from 'react';

import { Container, Checkbox, Task, } from './styles';

const task: React.FC = () => {
  return (
    <Container>
        <Checkbox type='checkbox' />
        <Task>AA</Task>
        {/* <Trashbin /> */}
    </Container>
  );
}

export default task;
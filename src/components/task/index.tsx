import React from 'react';

import { Container, Checkbox, Task, } from './styles';

const task: React.FC = () => {
  return (
    <Container>
        <Checkbox />
        <Task />
        {/* <Trashbin /> */}
    </Container>
  );
}

export default task;
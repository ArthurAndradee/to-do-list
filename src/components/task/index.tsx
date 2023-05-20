import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { Container, Checkbox, Task, Trashbin } from './styles';

const task: React.FC = () => {
  return (
    <Container>
        <Checkbox type='checkbox' />
        <Task>Harder, Better, Faster, Stronger</Task>
        <Trashbin>
          <FontAwesomeIcon icon={faTrashCan} />
        </Trashbin>
    </Container>
  );
}

export default task;
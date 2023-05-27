import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { Container, Checkbox, Text, Trashbin } from './styles';

const Task: React.FC = () => {
  const [showDecoration, setShowDecoration] = React.useState(false)

  function changeText() {
    setShowDecoration (current => !current)
  }

  return (
    <Container>
        <Checkbox type='checkbox' onClick={changeText}/>
        <Text style={{
          textDecoration: showDecoration ? "line-through" : "none",
          color: showDecoration ? "rgba(108, 108, 108, 0.5)" : "black",
        }}>
          task here
        </Text>
        <Trashbin>
          <FontAwesomeIcon icon={faTrashCan} />
        </Trashbin>
    </Container>
  );
}

export default Task;
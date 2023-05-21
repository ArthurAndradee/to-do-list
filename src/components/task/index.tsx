import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { Container, Checkbox, Text, Trashbin } from './styles';

const Task: React.FC = () => {
  const [showContainer, setShowContainer] = React.useState(false)

  function changeText() {
    setShowContainer (current => !current)
  }

  return (
    <Container>
        <Checkbox type='checkbox' onClick={changeText}/>
        <Text style={{textDecoration: showContainer ? "line-through" : "none"}}>Harder, Better, Faster, Stronger</Text>
        <Trashbin>
          <FontAwesomeIcon icon={faTrashCan} />
        </Trashbin>
    </Container>
  );
}

export default Task;
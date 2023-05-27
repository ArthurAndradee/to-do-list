import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { 
  Container, 
  Header, 
  CreateTaskButton, 
  Title,
  CreateTaskContainer,
  Input,
  PushButton,
  TaskBox, 
  Checkbox, 
  Text, 
  Trashbin
 } 
  from './styles';

import Task from '../task';

const Layout: React.FC = () => {
  const [showContainer, setShowContainer] = React.useState(false)

  const [showDecoration, setShowDecoration] = React.useState(false)

  function changeText() {
    setShowDecoration (current => !current)
  }

  const [message, setMessage] = React.useState('');

  const [updated, setUpdated] = React.useState(message);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
    setShowContainer(true)
  };

  return (
      <Container>
        <Header>
            <Title>⠀My tasks</Title>
            { showContainer ? 
            <CreateTaskContainer>
              <Input 
                placeholder="Your task here"
                onChange={handleChange}
                value={message}
                />
              <PushButton onClick={() => setShowContainer(false)}>
                Push task
              </PushButton>
            </CreateTaskContainer>
            : null }
            
            { showContainer ? null : 
              <CreateTaskButton onClick={handleClick}>
                Add new Task +
              </CreateTaskButton>    
            }
        </Header>
        <TaskBox>
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
        </TaskBox>
      </Container>
  )
}

export default Layout;
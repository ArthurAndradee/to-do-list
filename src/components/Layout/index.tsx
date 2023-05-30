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
import { Task } from 'styled-icons/boxicons-regular';

const Layout: React.FC = () => {
  const [showContainer, setShowContainer] = React.useState(false)

  const [showDecoration, setShowDecoration] = React.useState(false)
  
  const [message, setMessage] = React.useState('');

  const [updated, setUpdated] = React.useState(message);

  const changeText = () => {
    setShowDecoration (current => !current)
  }

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };
  
  const handleClick = () => {
    setShowContainer(true)
  };
  
  const handleOtherClick = () => {
    setUpdated(message);
    setShowContainer(false)
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
              <PushButton onClick={handleOtherClick}>
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
            {updated}
          </Text>
          <Trashbin>
            <FontAwesomeIcon icon={faTrashCan} />
          </Trashbin>
        </TaskBox>
      </Container>
  )
}

export default Layout;
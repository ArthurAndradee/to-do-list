import React from 'react';

import { 
  Container, 
  Header, 
  CreateTaskButton, 
  Title,
  CreateTaskContainer,
  Input,
  PushButton
 } 
  from './styles';

import Task from '../task';

const Layout: React.FC = () => {
  const [showContainer, setShowContainer] = React.useState(false)

  return (
      <Container>
        <Header>
            <Title>My tasks</Title>
            { showContainer ? 
            <CreateTaskContainer>
              <Input placeholder="Your task here"/>
              <PushButton onClick={() => setShowContainer(false)}>
                Push task
              </PushButton>
            </CreateTaskContainer>
            : null }
            
            { showContainer ? null : 
              <CreateTaskButton onClick={() => setShowContainer(true)}>
                Add new Task +
              </CreateTaskButton>    
            }
        </Header>
            <Task />
            <Task />
            <Task />
      </Container>
  )
}

export default Layout;
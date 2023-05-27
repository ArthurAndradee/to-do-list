import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
width: 150%;

margin-left: 30%;
margin-top: 5%;

border: 4px solid #7e25be;
border-radius: 15px;

background-color: #D8D8D8;
`;

export const Header = styled.div`
height: 15%;
width: 96%;

margin-left: 2%;
margin-top: 2%;

display: flex;
justify-content: space-between;
align-items: center;
`;

export const CreateTaskButton = styled.button`
  height: 60%;
  width: 30%;

  border-radius: 25px;
  box-shadow: 0px 0px 3px 0px black;

  background-color: #7e25be;;
  font-size: 150%;
  color: #FFFFFF;

  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  transition: all 300ms;

  &:hover {
        color: #7e25be;
        background-color: white;

        transform: scale(1.1);
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 150%;

  transition: all 300ms;

  &:hover {
    font-size: 200%;
  }

  cursor: default;
`;

export const CreateTaskContainer = styled.button`
  height: 60% ;
  width: 80%;

  border-radius: 25px;
  box-shadow: 0px 0px 3px 0px black;

  background-color: #7e25be;
  font-size: 150%;
  color: #FFFFFF;

  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 150ms;
`;

export const Input = styled.input`
    height: 26px;
    width: 575px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
    box-shadow: 0px 0px 2px 0px white;

    color: black;

    background: white;
	  border: none;
	  padding: 0;
	  outline: inherit;

    text-indent: 8px;
`;

export const PushButton = styled.button`
    height: 26px;
    width: 100px;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    cursor: pointer;

    box-shadow: 0px 0px 2px 0px white;

    border: 1px solid white;
	  color: white;

    background: none;
	  border: none;

    transition: all 300ms;

    &:hover {
        color: #7e25be;
        background-color: white;

        width: 120px;
    }
`;

export const TaskBox = styled.div`
  height: 15%;
  width: 96%;

  margin: 1% 2%;

  border-radius: 25px;
  box-shadow: 0px 0px 2px 0px #7e25be;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input`
  border-radius: 5px;

  margin-right: 3%;

  position: relative;

  width: 1.7em;
  height: 1.7em;
  color: black;

  border: 1px solid gray;
  border-radius: 4px;

  appearance: none;

  outline: 0;

  cursor: pointer;

  &:hover {
    background-color: rgba(208, 208, 208, 0.5);
  }
  
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 2px;
    left: 6px;
    width: 8px;
    height: 14px;
    border-style: solid;
    border-color: white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: white;
    border-color: #7e25be;
    background: #7e25be;
    &::before {
      opacity: 1;
    }
  }
  `;

export const Text = styled.p`
  width: 80%;

  text-align: center;
`;

export const Trashbin = styled.div`
  height: 25px;
  width: 25px;

  margin-left: 3%;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: red;
  }
`;

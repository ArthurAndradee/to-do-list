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
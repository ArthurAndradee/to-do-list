import styled from 'styled-components';

export const Container = styled.button`
  height: 60%;
  width: 60%;

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

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
    height: 26px;
    width: 330px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
    box-shadow: 0px 0px 2px 0px white;

    color: black;

    background: white;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;

    text-indent: 8px;
`;

export const SearchButton = styled.button`
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
    }
`;
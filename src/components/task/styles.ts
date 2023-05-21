import styled from 'styled-components';

export const Container = styled.div`
  height: 15%;
  width: 96%;

  margin-left: 2%;
  margin-top: 2%;

  border-radius: 25px;
  box-shadow: 0px 0px 2px 0px black;

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

export const Task = styled.p`
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

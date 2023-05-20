import styled from 'styled-components';

export const Container = styled.div`
  height: 15%;
  width: 96%;

  margin-left: 2%;
  margin-top: 2%;

  border-radius: 25px;
  box-shadow: 0px 0px 2px 0px black;

  background-color: white;
`;

export const Checkbox = styled.input`
  width: 30px;
  height: 30px;

  margin-left: 5%;
  margin-top: 2.5%;

  border-radius: 5px;

  border: 1px solid #ddd;
  appearance: none;

  cursor: pointer;
`;

export const Task = styled.div`
  width: 50%;

  margin-right: 25%;
  margin-top: 3.5%;

  border: 1px solid black;

  float: right;
`;

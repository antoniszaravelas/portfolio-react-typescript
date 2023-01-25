import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  display: block;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  color: red;
  font-size: 15px;
  font-style: italic;
  text-decoration: underline;
  border: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 3px;
  border-radius: 3px;
  border: 1px solid crimson;
  margin-left: 10px;
`;

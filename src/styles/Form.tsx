import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
  animation: ${fadeIn} 1s;
`;

export const Input = styled.input`
  padding: 8px;
  outline: unset;
  border: unset;
  text-transform: capitalize;
  border-radius: 4px 0 0 4px;
`;

export const Button = styled.button.attrs({ type: "submit" })`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: unset;
  outline: unset;
  padding: 9.3px;
  border-radius: 0px 4px 4px 0;
  background-color: white;
  color: ${(props) => props.theme.purple};
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${(props) => props.theme.purple};
    color: white;
  }
`;

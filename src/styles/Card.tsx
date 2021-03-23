import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.section`
  height: 100%;
  width: 30vw;
  background-color: ${(props) => props.theme.dark};
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 40px 0 40px 0;
  flex-direction: column;
  animation: ${fadeIn} 1s;
`;

export const Image = styled.img`
  height: 20vh;
  width: 9vw;
  border-radius: 50%;
  border: 6px solid ${(props) => props.theme.black};
`;

export const Name = styled.h1`
  color: white;
`;

export const Description = styled.p`
  color: white;
  text-align: center;
  padding: 0 2vw 0 2vw;
`;

export const Item = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Link = styled.a`
  color: white;
  text-decoration: unset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerItems = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

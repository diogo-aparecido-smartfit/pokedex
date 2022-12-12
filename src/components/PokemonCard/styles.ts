import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
`;

export const Image = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  margin: 0 1rem;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.5);
  }
`;

export const Text = styled.h1`
  display: flex;
  position: relative;
  margin: 2.5rem 0 0 0.5rem;
  color: #d30a40;
  font-size: 24px;
  font-weight: 800;
`;

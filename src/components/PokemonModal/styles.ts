import styled from "styled-components";

export const Container = styled.div``;

export const PokemonContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 300px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  opacity: 0.8;
`;

export const PokemonId = styled.span`
  background: none;
`;

import styled from "styled-components";

import { device, palette } from "utils/styleVariables";

export const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  color: ${palette.navy};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  /* line-height: 20px; */
  color: ${(props) => (props.color ? props.color : palette.navy)};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  padding-bottom: ${(props) => (props.gutterBottom ? "10px" : "0")};
  line-height: 20px;
`;

export const TextContainer = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  padding-right: 20px;
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.tablet} {
    padding: 40px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  grid-gap: 50px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Status = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.status === "open" ? palette.yellow : palette.red};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  min-width: 75px;
`;

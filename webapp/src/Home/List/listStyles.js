import styled from "styled-components";
import { palette } from "utils/styleVariables";
import lost from "assets/animations/lost.gif";

export const Text = styled.p`
  font-size: 16px;
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

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const ListItem = styled.div`
  padding: 10px 20px;
  border: 2px solid ${palette.navy};
  margin-bottom: 10px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${palette.grey};
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

export const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LostImage = styled.div`
  background: url(${lost}) center no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
  margin: 20px;
`;

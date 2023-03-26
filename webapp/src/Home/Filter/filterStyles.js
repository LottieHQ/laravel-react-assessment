import styled from "styled-components";
import { palette } from "utils/styleVariables";

export const Form = styled.div`
  width: 50%;
  border: 2px solid ${palette.navy};
  border-radius: 16px;
  padding: 10px 20px;
`;

export const Label = styled.p`
  font-size: 20px;
  color: ${palette.navy};
  font-weight: 600;
  padding-bottom: 10px;
  line-height: 24px;
`;

export const Button = styled.button`
  background-color: ${palette.grey};
  border: 2px solid ${palette.red};
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  :active {
    border: 2px solid ${palette.yellow};
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

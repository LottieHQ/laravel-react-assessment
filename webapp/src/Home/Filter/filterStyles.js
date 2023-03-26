import styled from "styled-components";

import { device, palette } from "utils/styleVariables";

export const Form = styled.div`
  width: 100%;
  order: 1;
  border: 2px solid ${palette.navy};
  border-radius: 16px;
  padding: 10px 20px;
  position: -webkit-sticky;
  top: 20px;

  @media ${device.tablet} {
    width: 50%;
    order: 2;
    position: sticky;
  }
`;

export const Label = styled.p`
  font-size: 20px;
  color: ${palette.navy};
  font-weight: 600;
  padding-bottom: 10px;
  line-height: 24px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${palette.grey};
  border: 2px solid ${palette.red};
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  :active {
    border: 2px solid ${palette.yellow};
  }

  @media ${device.tablet} {
    width: auto;
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    width: auto;
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

import styled from "styled-components";

import loading from "assets/animations/loading.gif";

export const LoadingImage = styled.div`
  width: 50%;
  height: 100%;
  background: url(${loading}) center no-repeat;
  z-index: 1;
`;

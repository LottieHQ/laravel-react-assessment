import * as React from "react";

import { Container, Title } from "./listStyles";
import Loading from "./Loading";

const List = () => {
  return (
    <Loading>
      <Container>
        <Title>Locations</Title>
      </Container>
    </Loading>
  );
};

export default List;

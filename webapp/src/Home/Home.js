import * as React from "react";

import { Container, Main, Title } from "./homeStyles";
import List from "./List";
import Loading from "./Loading";

const Home = ({ list }) => {
  return (
    <Loading>
      <Container>
        <Title>Locations</Title>
        <Main>
          <List list={list} />
        </Main>
      </Container>
    </Loading>
  );
};

export default Home;

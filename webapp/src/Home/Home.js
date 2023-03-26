import React from "react";

import { Container, Main, Title } from "./homeStyles";
import Filter from "./Filter";
import List from "./List";
import Loading from "./Loading";

const Home = () => {
  return (
    <Loading>
      <Container>
        <Title>Locations</Title>
        <Main>
          <List />
          <Filter />
        </Main>
      </Container>
    </Loading>
  );
};

export default Home;

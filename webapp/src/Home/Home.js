import React from "react";

import { Container, Main, Title } from "./homeStyles";
import Filter from "./Filter";
import List from "./List";
import Loading from "./Loading";

const Home = () => {
  return (
    <Container>
      <Title>Locations</Title>
      <Main>
        <Loading>
          <List />
        </Loading>
        <Filter />
      </Main>
    </Container>
  );
};

export default Home;

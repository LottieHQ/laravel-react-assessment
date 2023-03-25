import * as React from "react";
import { format } from "date-fns";

import {
  Container,
  List,
  ListItem,
  Main,
  Status,
  Text,
  TextContainer,
  Title,
} from "./homeStyles";
import Loading from "./Loading";
import { palette } from "../utils/styleVariables";

const Home = ({ list }) => {
  return (
    <Loading>
      <Container>
        <Title>Locations</Title>
        <Main>
          <List>
            {list.map((item, i) => (
              <ListItem key={item.location_name + i}>
                <TextContainer>
                  <Text bold gutterBottom color={palette.red}>
                    {item.location_name}
                  </Text>
                  <Text gutterBottom>{item.location_description}</Text>
                  <Text bold color={palette.red}>
                    {format(new Date(item.date_start), "d MMM y") +
                      " – " +
                      format(new Date(item.date_end), "d MMM y")}
                  </Text>
                </TextContainer>
                <Status status={item.status}>
                  <Text
                    color={item.status === "closed" ? palette.white : undefined}
                  >
                    {item.status}
                  </Text>
                </Status>
              </ListItem>
            ))}
          </List>
        </Main>
      </Container>
    </Loading>
  );
};

export default Home;

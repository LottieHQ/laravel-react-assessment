import { format } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

import {
  EmptyContainer,
  LostImage,
  ListItem,
  Status,
  StyledList,
  Text,
  TextContainer,
} from "./listStyles";
import { palette } from "utils/styleVariables";

const List = ({ list }) => {
  return (
    <StyledList>
      {!list.length && (
        <EmptyContainer>
          <LostImage />
          <Text>No results, please try again</Text>
        </EmptyContainer>
      )}
      {list &&
        list.map((item, i) => (
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
    </StyledList>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      location_name: PropTypes.string.isRequired,
      location_description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      date_start: PropTypes.string.isRequired,
      date_end: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default List;

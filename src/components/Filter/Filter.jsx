import React, { Component } from "react";
import { Grid, Label, Segment } from "semantic-ui-react";

const Filter = props => {
  return (
    <Segment>
      <Grid>
        <Grid.Column>
          {props.categories.map(cat => (
            <Label
              onClick={() => props.onClick(cat.category)}
              key={`label-${cat.category}`}
              as="a"
              active={cat.selected}
              color={cat.selected ? "red" : "grey"}
            >
              {cat.category}
            </Label>
          ))}
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Filter;

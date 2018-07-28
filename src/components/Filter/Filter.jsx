import React, { Component } from "react";
import { Grid, Label, Segment } from "semantic-ui-react";

const Filter = props => {
  return (
    <Segment>
      <Grid>
        <Grid.Column>
          {console.log(props.categories)}
          <Label
            key={`label-all`}
            as="a"
            active={props.areAllSelected}
            color={props.areAllSelected ? "red" : "grey"}
            size="large"
            className="category-label"
            onClick={() => props.handleSelectAll()}
          >
            all
          </Label>

          {props.categories.map(cat => (
            <Label
              onClick={() => props.onClick(cat.category)}
              key={`label-${cat.category}`}
              as="a"
              active={cat.selected}
              color={cat.selected ? "red" : "grey"}
              size="large"
              className="category-label"
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

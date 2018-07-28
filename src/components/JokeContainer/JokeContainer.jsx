import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Joke from "./../Joke/Joke";
import axios from "axios";

class JokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  fetchCategories = () => {
    let res = axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then(result => result);
    return res;
  };

  componentDidMount = () => {
    this.fetchCategories().then(res => this.setState({ categories: res.data }));
  };

  render() {
    return (
      <Container>
        <Grid doubling centered>
          {this.state.categories.map(category => (
            <Grid.Column computer={4} tablet={8} mobile={12}>
              <Joke category={category} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default JokeContainer;

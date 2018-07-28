import React, { Component } from "react";
import { Grid, Container, Segment } from "semantic-ui-react";
import Joke from "./../Joke/Joke";
import axios from "axios";
import Filter from "./../Filter/Filter";
class JokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      filterCategories: []
    };
  }

  fetchCategories = () => {
    let res = axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then(result => result);
    return res;
  };

  componentDidMount = () => {
    this.fetchCategories().then(res => {
      console.log(res.data);
      this.setState({ categories: res.data });
    });

    const temp = this.state.categories;
    const categories = [...temp, "all"];
    categories.sort();
    const mappedCategories = categories.map(cat => {
      return {
        category: cat,
        selected: false
      };
    });
    this.setState({
      ...this.state.categories,
      filterCategories: [...mappedCategories]
    });
  };

  handleCategoriesClick(category) {
    const filterCategories = this.state.filterCategories.map(cat => {
      if (cat.category === category) return { ...cat, selected: true };
      else return cat;
    });
    this.setState({ ...this.state, filterCategories });
  }

  render() {
    return (
      <Container>
        <Filter
          categories={this.state.categories}
          onClick={this.handleCategoriesClick}
          fluid
        />

        <Grid doubling centered>
          {this.state.categories.map(category => (
            <Grid.Column
              key={`card-${category}`}
              computer={4}
              tablet={8}
              mobile={12}
            >
              <Joke category={category} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default JokeContainer;

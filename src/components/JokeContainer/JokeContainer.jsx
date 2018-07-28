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
      filterCategories: [],
      areAllSelected: true
    };

    this.handleCategoriesClick = this.handleCategoriesClick.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  fetchCategories = () => {
    let res = axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then(result => result);
    return res;
  };

  componentDidMount = () => {
    this.fetchCategories().then(res => {
      let categories = res.data;
      categories.sort();
      const mappedCategories = categories.map(cat => {
        return {
          category: cat,
          selected: true
        };
      });
      this.setState({
        ...this.state,
        categories,
        filterCategories: [...mappedCategories]
      });
    });
  };

  handleCategoriesClick(category) {
    let categories;
    let filterCategories = this.state.filterCategories.map(cat => {
      if (cat.category === category) return { ...cat, selected: !cat.selected };
      else return cat;
    });
    categories = filterCategories
      .filter(cat => cat.selected)
      .map(cat => cat.category);

    this.setState({ ...this.state, categories, filterCategories });
  }

  handleSelectAll() {
    const amountSelected = this.state.filterCategories.reduce(
      (prev, elem) => (elem.selected ? prev + 1 : prev),
      0
    );

    let areAllSelected =
      amountSelected === this.state.filterCategories.length ? true : false;

    let filterCategories;

    if (areAllSelected) {
      filterCategories = this.state.filterCategories.map(cat => {
        return { ...cat, selected: false };
      });
      areAllSelected = !areAllSelected;
    } else {
      filterCategories = this.state.filterCategories.map(cat => {
        return { ...cat, selected: true };
      });
      areAllSelected = !areAllSelected;
    }

    this.setState({ ...this.state, filterCategories, areAllSelected });
  }

  render() {
    return (
      <Container>
        {console.log("eitacaralho", this.state.filterCategories)}
        <Filter
          categories={this.state.filterCategories}
          onClick={this.handleCategoriesClick}
          handleSelectAll={this.handleSelectAll}
          areAllSelected={this.state.areAllSelected}
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

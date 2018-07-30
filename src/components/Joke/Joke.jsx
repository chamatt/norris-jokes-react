import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";
import { Dimmer, Loader } from "semantic-ui-react";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      image: `https://source.unsplash.com/200x120/?${this.props.category}`,
      loading: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  fetchJoke = category => {
    this.setState({ ...this.state, loading: true });
    var URL = "";
    if (category)
      URL = `https://api.chucknorris.io/jokes/random?category=${category}`;
    else URL = `https://api.chucknorris.io/jokes/random`;
    let res = axios.get(URL).then(result => result);

    return res;
  };

  componentDidMount = () => {
    this.fetchJoke(this.state.category).then(res => {
      const result = res.data;
      this.setState({
        ...this.state,
        loading: false,
        joke: result.value,
        image: `https://source.unsplash.com/200x120/?${this.props.category}`
      });
    });
  };

  handleClick = () => {
    this.componentDidMount();
  };

  render() {
    this.desc = (
      <div>
        <Dimmer active={this.state.loading}>
          <Loader />
        </Dimmer>

        {this.state.joke}
      </div>
    );

    this.extra = <a onClick={this.handleClick}>Load another joke...</a>;
    const category = this.props.category;

    return (
      <Card
        image={this.state.image}
        header={category}
        description={this.desc}
        extra={this.extra}
        centered
      />
    );
  }
}

export default Joke;

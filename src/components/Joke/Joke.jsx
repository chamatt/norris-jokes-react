import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';


class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            joke: "teste",
            image: "aaa",
            loading: false
        }
    }

    fetchJoke(category) {
        this.setState({...this.state, loading: true});
        var URL = "";
        if(category) URL = `https://api.chucknorris.io/jokes/random?category=${category}`;
        else URL = `https://api.chucknorris.io/jokes/random`;
        let res = axios.get(URL).then( result => result );

        return res;
    }

    handleClick = () => {
        this.fetchJoke(this.state.category).then((res) =>{
            console.log(result);
            const result = res.data;
            this.setState({...this.state, loading: false, joke: result.value, image: result.icon_url});
        });
    }

    

    
    render() {
        this.desc = (
            <div> 
                <Dimmer active={this.state.loading}>
                  <Loader />
                </Dimmer>

                {this.state.joke}
            </div>
        )

        this.extra = (
            <a onClick={() => this.handleClick()}>
              Load another joke...
            </a>
        )
        const category = this.props.category;

        return (
                    <Card
                        image={this.state.image}
                        header={this.state.category}
                        description={this.desc}
                        extra={this.extra}
                    >
                    </Card>
        );


    }


}

export default Joke;
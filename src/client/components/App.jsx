import React, { Component } from "react";
import $ from 'jquery';
import Post from './Post.jsx';
import List from './List.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      cowInfo: ''
    };

    this.getCows = this.getCows.bind(this);
    this.postCows = this.postCows.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
  }

  componentDidMount() {
    this.getCows()
  }

  getCows() {
    $.get({
      url: '/api/cows',
      error: ((err) => {
        return console.error('AJAX GET FAILED', err)
      }),
      success: ((cows) => {
        this.setState({
          cows: cows
        })
      })
    })
  };

  postCows(cow) {
    $.post({
      url: 'api/cows',
      data: {post: cow},
      error: ((err) => {
        return console.error('AJAX POST FAILED', err)
      }),
      success: ((cow) => {
        let newCow = this.state.cows.concat([cow]);
        this.setState({
          cows: newCow
        })
      })
    })
  };

  descriptionHandler(cow) {
    this.setState({
      cowInfo: cow
    })
  }


  render() {
    return (
      <div>
        <h1>Hieu's Barn Presents</h1>

        <div className="description"> {this.state.cowInfo}

        </div>

        <div>
          <Post handlePost={this.postCows} />
          </div>

          <div>
            <List cowList={this.state.cows} description={(cow) => this.descriptionHandler(cow)} />
          </div>

      </div>
    );
  }
}

export default App;

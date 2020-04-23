import React, { Component } from "react";
import $ from 'jquery';
import Post from './Post.jsx'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };

    this.getCows = this.getCows.bind(this);
    this.postCows = this.postCows.bind(this);
  }

  getCows() {
    $.get({
      url: '/api/cows',
      error: ((err) => {
        return console.log('AJAX GET FAILED', err)
      }),
      success: ((cows) => {
        this.setState({
          cows: cows
        })
      })
    })
  };

  postCows(event) {
    $.post({
      url: 'api/cows',
      error: ((err) => {
        return console.err('AJAX POST FAILED', err)
      }),
      success: ((cow) => {
        let newCow = this.state.cows.concat(cow);
        this.setState({
          cows: newCow
        })
      })
    })
  }


  render() {
    return (
      <div>
        <h1>FROM REACT</h1>

        <div>
          <Post handlePost={this.postCows} />
          </div>

          {/* <div>
            <List cowList={this.state.cows} />
          </div> */}

      </div>
    );
  }
}
export default App;

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
    this.updateCow = this.updateCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
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

  updateCow(id) {

    let newName = prompt('rename dis cow');
    let newDescription = prompt('say sumthin bout ur cow');
    let cowData = { name: newName, description: newDescription};

    if (cowData.name && cowData.description) {
      $.ajax({
        url: `api/cows/${id}`,
        type: 'PUT',
        data: {post: cowData},
        error: ((err) => {
          return console.error('AJAX PUT FAILED',err)
        }),
        success: ((cow) => {
          this.setState({
            cows: cow,
            cowInfo: ''
          })
        })
      })
    }
  };

  deleteCow(id) {
    $.ajax({
      url: `api/cows/${id}`,
      type: 'DELETE',
      error: ((err) => {
        return console.error('AJAX DELETE FAILED!!!', err)
      }),
      success: ((cow) => {
        this.setState({
          cows: cow,
          cowInfo: ''
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
            <List cowList={this.state.cows}
                  description={(cow) => this.descriptionHandler(cow)}
                  update={(id) => this.updateCow(id)}
                  delete={(id) => this.deleteCow(id)}/>
          </div>

      </div>
    );
  }
}

export default App;

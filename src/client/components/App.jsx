import React, { Component } from 'react';
import $ from 'jquery';
import Post from './Post';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      cowInfo: '',
    };

    this.getCows = this.getCows.bind(this);
    this.postCows = this.postCows.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.updateCow = this.updateCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    $.get({
      url: '/api/cows',
      error: ((err) => console.error('AJAX GET FAILED', err)),
      success: ((cows) => {
        this.setState({
          cows,
        });
      }),
    });
  }

  postCows(cow) {
    $.post({
      url: 'api/cows',
      data: { post: cow },
      error: ((err) => console.error('AJAX POST FAILED', err)),
      success: ((cow) => {
        const newCow = this.state.cows.concat([cow]);
        this.setState({
          cows: newCow,
        });
      }),
    });
  }

  updateCow(id) {
    const newName = prompt('Rename this cow');
    const newDescription = prompt('Add a description');
    const cowData = { name: newName, description: newDescription };

    if (cowData.name && cowData.description) {
      $.ajax({
        url: `api/cows/${id}`,
        type: 'PUT',
        data: { post: cowData },
        error: ((err) => console.error('AJAX PUT FAILED', err)),
        success: ((cow) => {
          alert(`${newName} feels different`);
          this.setState({
            cows: cow,
            cowInfo: '',
          });
        }),
      });
    }
  }

  deleteCow(id) {
    const randomString = Math.random().toString(36).toUpperCase().slice(2);
    const confirm = prompt(`Enter "${randomString}" to make steak`);

    if (randomString === confirm) {
      $.ajax({
        url: `api/cows/${id}`,
        type: 'DELETE',
        error: ((err) => console.error('AJAX DELETE FAILED!!!', err)),
        success: ((cow) => {
          alert('Chik-Fil-A\'s stocks plummeted');
          this.setState({
            cows: cow,
            cowInfo: '',
          });
        }),
      });
    } else {
      alert('Its will to live was too strong!');
    }
  }

  descriptionHandler(cow) {
    this.setState({
      cowInfo: cow,
    });
  }

  render() {
    const { cowInfo, cows } = this.state;
    return (
      <div>
        <h1>Hieu's Barn </h1>

        <div className="description">
          {' '}
          {cowInfo}

        </div>

        <div>
          <Post handlePost={this.postCows} />
        </div>

        <div>
          <List
            cowList={cows}
            description={(cow) => this.descriptionHandler(cow)}
            updateCow={(id) => this.updateCow(id)}
            deleteCow={(id) => this.deleteCow(id)}
          />
        </div>

      </div>
    );
  }
}

export default App;

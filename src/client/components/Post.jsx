import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cowInfo: {
        name: '',
        description: '',
      },
    };
  }

  handleChange(propertyName, event) {
    const { cowInfo } = this.state;
    cowInfo[propertyName] = event.target.value;
    this.setState({
      cowInfo,
    });
  }

  handleCowSubmit(e) {
    e.preventDefault();
    const { name, description } = this.state.cowInfo;
    if (name.length !== 0 && description.length !== 0) {
      this.props.handlePost(this.state.cowInfo);
    }
    this.setState({
      cowInfo: {
        name: '',
        description: '',
      },
    });
  }

  render() {
    const { name, description } = this.state.cowInfo;
    return (

      <div>
        <form autoComplete="off">

          <label className="cowName">
            <input
              placeholder="Name Your Cow"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange.bind(this, 'name')}
            />
          </label>

          <label className="cowDesc">
            <input
              placeholder="Describe Your Cow"
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange.bind(this, 'description')}
            />
          </label>

          <button type="button" className="cowSubmit" onClick={this.handleCowSubmit.bind(this)}>Add to barn</button>
        </form>

      </div>
    );
  }
}

export default Post;

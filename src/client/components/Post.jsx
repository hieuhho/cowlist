import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cowInfo: {
        name: '',
        description: ''
      }
    }
  }

  handleChange(propertyName, event) {
    const cowInfo = this.state.cowInfo;
    cowInfo[propertyName] = event.target.value;
    this.setState({ cowInfo: cowInfo });
  }

  handleCowSubmit() {
    this.props.handlePost(this.state.cowInfo);
  }


  render() {
    return (

      <div>
      <h2>Add a Cow</h2>
      <form>

        <label className="cowName">
          Name:
          <input
            type="text"
            name="name"
            value={this.state.cowInfo.name}
            onChange={this.handleChange.bind(this, 'name')}
          /></label>

        <label className="cowDesc">
          Description:
          <input
            type="text"
            name="description"
            value={this.state.cowInfo.description}
            onChange={this.handleChange.bind(this,'description')} />
        </label>

          <button className="cowSubmit" onClick={this.handleCowSubmit.bind(this)}>Submit Cow</button>
      </form>

    </div>
    )
  }
}

export default Post;
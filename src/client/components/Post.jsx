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

  handleCowSubmit(e) {
    e.preventDefault();
    this.props.handlePost(this.state.cowInfo);
    this.setState({
      cowInfo: {
        name: '',
        description: ''
      }
    })
  }


  render() {
    return (

      <div>
      <h2>Add a Cow</h2>
      <form>

        <label className="cowName">
          Name:
          <input
            placeholder="name this cow"
            type="text"
            name="name"
            value={this.state.cowInfo.name}
            onChange={this.handleChange.bind(this, 'name')}
          /></label>

        <label className="cowDesc">
          Description:
          <input
            placeholder="describe your cow"
            type="text"
            name="description"
            value={this.state.cowInfo.description}
            onChange={this.handleChange.bind(this,'description')} />

          <button className="cowSubmit" onClick={this.handleCowSubmit.bind(this)}>Submit Cow</button>
        </label>

      </form>

    </div>
    )
  }
}

export default Post;
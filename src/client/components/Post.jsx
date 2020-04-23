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
    this.setState({
      cowInfo: cowInfo
    });
  };

  handleCowSubmit(e) {
    e.preventDefault();
    if(this.state.cowInfo.name.length !== 0 && this.state.cowInfo.description.length !== 0) {
      this.props.handlePost(this.state.cowInfo);
    }
    this.setState({
      cowInfo: {
        name: '',
        description: ''
        }
    })
  };


  render() {
    return (

      <div>
      <form>

        <label className="cowName">
          <input
            placeholder="name them cow"
            type="text"
            name="name"
            value={this.state.cowInfo.name}
            onChange={this.handleChange.bind(this, 'name')}
          /></label>

        <label className="cowDesc">
          <input
            placeholder="describe dat cow"
            type="text"
            name="description"
            value={this.state.cowInfo.description}
            onChange={this.handleChange.bind(this,'description')} />

        </label>
          <button className="cowSubmit" onClick={this.handleCowSubmit.bind(this)}>add yo cow</button>

      </form>

    </div>
    )
  }
}

export default Post;
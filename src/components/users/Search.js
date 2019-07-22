import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.state.text === ""
      ? this.props.setAlert("Please enter something", "light")
      : this.props.searchUsers(this.state.text);

    await this.setState({ text: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { clearUsers, showClear } = this.props;

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search Users..."
            value={this.state.text}
            name="text"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;

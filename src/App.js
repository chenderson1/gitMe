import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import Spinner from "./components/layout/Spinner";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    await this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <>
        <Navbar title="gitMe" icon="fab fa-github" />
        <div className="container">
          {!this.state.loading ? (
            <Users users={this.state.users} />
          ) : (
            <Spinner />
          )}
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router";
import Navbar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import Spinner from "./components/layout/Spinner";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: []
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   await this.setState({ users: res.data, loading: false });
  // }

  // search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    await this.setState({ users: res.data.items, loading: false });
  };

  // get single user
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    await this.setState({ user: res.data, loading: false });
  };
  getUserRepos = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:acs&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    await this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });

    setTimeout(() => this.setState({ alert: null }), 3700);
  };

  render() {
    const { users, loading, alert, user, repos } = this.state;
    return (
      <>
        <Navbar title="gitMe" icon="fab fa-github" />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0}
                    setAlert={this.setAlert}
                  />
                  {!loading ? <Users users={users} /> : <Spinner />}
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

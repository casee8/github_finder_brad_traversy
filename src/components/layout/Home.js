import React, { Component } from "react";
// import Navbar from "./Navbar";
import Users from "../users/Users";
import Search from "../users/Search";
import Alert from "./Alert";
import axios from "axios";

class Home extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then((res) => console.log(res.data));
  // }

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false });
  // }

  // Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className='App'>
        {/* <Navbar title='Github Finder' icon='fab fa-github' /> */}
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default Home;

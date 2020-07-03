import React, { Component } from "react";
import GroupList from "./components/GroupList";
import "./output.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupList: [],
      memberList: {},
      oshiList: [],
      groupSelected: "",
    };
  }
  onGroupMouseEnter = (event) => {
    this.setState({ groupSelected: event.currentTarget.id });
  };

  render() {
    return (
      <div>
        <GroupList onGroupMouseEnter={this.onGroupMouseEnter} />
      </div>
    );
  }
}

export default App;

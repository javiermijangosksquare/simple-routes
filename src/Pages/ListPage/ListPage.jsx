import React from "react";
import "./List.css";
import { List } from "../../Components/List/List";
import { withRouter } from "react-router-dom";

class ListPageComponent extends React.Component {
  state = {
    data: null
  };

  handleUserClick = userId => () => {
    this.props.history.push(`/user/${userId}`);
  };

  fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()
    );
    return res;
  };

  componentDidMount() {
    this.fetchUsers().then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className={"mainListContainer"}>
        <div className={"listContainer"}>
          <List users={data} onItemClick={this.handleUserClick} />
        </div>
      </div>
    );
  }
}

export const ListPage = withRouter(ListPageComponent);

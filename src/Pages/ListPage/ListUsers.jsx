import React from "react";
import { List } from "../../Components/List/List";
import { ListItem } from "../../Components/List/ListItem/ListItem";
import { withRouter } from "react-router-dom";

class ListUserComponent extends React.Component {
  state = {
    data: null
  };

  handleUserClick = userId => () => {
    if (userId === this.props.logedUser.id) {
      this.props.history.push(`/user/${userId}`);
    }
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
      <List>
        {data
          ? data.map(user => (
              <ListItem
                user={user}
                key={user.id}
                onItemClick={this.handleUserClick}
              />
            ))
          : "Loading..."}
      </List>
    );
  }
}

export const ListUser = withRouter(ListUserComponent);

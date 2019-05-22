import React from "react";
import "./InfoPage.css";
import { Paper } from "../../Components/Paper/Paper";
import { withRouter } from "react-router-dom";

class InfoPageComponent extends React.Component {
  state = {
    data: ""
  };

  fetchUser = async () => {
    const userId = this.props.match.params.userId;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then(response => response.json());
    return res;
  };

  componentDidMount() {
    this.fetchUser().then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;
    return (
      <div className={"mainContainer"}>
        <Paper userInfo={data} />
      </div>
    );
  }
}

export const InfoPage = withRouter(InfoPageComponent);

import React from "react";
import "./List.css";
import { ListUser } from "./ListUsers";
import { withRouter } from "react-router-dom";
import { StorageConsumer } from "../../Providers/Storage";

class ListPageComponent extends React.Component {
  render() {
    return (
      <div className={"mainListContainer"}>
        <div className={"listContainer"}>
          <StorageConsumer>
            {value => <ListUser logedUser={value.getUserInfo()} />}
          </StorageConsumer>
        </div>
      </div>
    );
  }
}

export const ListPage = withRouter(ListPageComponent);

import React from "react";
import "./List.css";
import { ListPosts } from "./ListPosts";
import { withRouter, Redirect } from "react-router-dom";

import { StorageContext } from "../../Providers/Storage";

class PostPageComponent extends React.Component {
  static contextType = StorageContext;
  render() {
    const user = this.context.getUserInfo();

    if (!user) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className={"mainListContainer"}>
        <div className={"listContainer"}>
          <ListPosts />
        </div>
      </div>
    );
  }
}

export const PostPage = withRouter(PostPageComponent);

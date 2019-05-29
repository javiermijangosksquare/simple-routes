import React from "react";
import { List } from "../../Components/List/List";
import { PostListItem } from "../../Components/List/ListItem/PostListItem";
import { withRouter } from "react-router-dom";
import { withSorter } from "../../HOCs/SorterHOC";

class ListPostsComponent extends React.Component {
  state = {
    data: null
  };

  handlePostClick = postId => () => {
    console.log(postId);
  };

  fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      response => response.json()
    );
    return res;
  };

  componentDidMount() {
    this.fetchUsers().then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    const sortedData = this.props.sortData(data, "title");
    return (
      <List>
        {sortedData
          ? sortedData.map(post => (
              <PostListItem
                post={post}
                key={post.id}
                onItemClick={this.handlePostClick}
              />
            ))
          : "Loading..."}
      </List>
    );
  }
}

export const ListPosts = withRouter(withSorter(ListPostsComponent));

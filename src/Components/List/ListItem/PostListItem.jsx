import React from "react";
import "./ListItem.css";

export const PostListItem = props => {
  const { onItemClick, post } = props;
  const { title, body, id } = post;

  return (
    <div className={"itemContainer"} onClick={onItemClick(id)}>
      <h3>{title}</h3>
      <hr />
      <p>{body}</p>
    </div>
  );
};

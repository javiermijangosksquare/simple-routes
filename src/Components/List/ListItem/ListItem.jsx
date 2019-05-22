import React from "react";
import "./ListItem.css";

export const ListItem = props => {
  const { onItemClick, user } = props;
  const { name, email, id } = user;

  return (
    <div className={"itemContainer"} onClick={onItemClick(id)}>
      <h3>{name}</h3>
      <hr />
      <p>
        <strong>Email: </strong>
        {email}
      </p>
    </div>
  );
};

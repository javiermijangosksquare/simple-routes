import React, { Fragment } from "react";
import { ListItem } from "./ListItem/ListItem";

export const List = props => {
  const { users, onItemClick } = props;
  return (
    <Fragment>
      {users
        ? users.map(user => (
            <ListItem user={user} key={user.id} onItemClick={onItemClick} />
          ))
        : "Loading..."}
    </Fragment>
  );
};

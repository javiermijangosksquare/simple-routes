import React, { Fragment } from "react";
import "./Paper.css";

export const Paper = props => {
  const { userInfo } = props;
  const { name, id, username, phone, website, company } = userInfo;
  return (
    <div className={"paperContainer"}>
      <h1>{userInfo ? name : "Loading"}</h1>
      <hr />
      {userInfo ? (
        <Fragment>
          <h3>ID:</h3>
          <p>{id}</p>
          <h3>Username:</h3>
          <p>{username}</p>
          <h3>Phone:</h3>
          <p>{phone}</p>
          <h3>Website:</h3>
          <p>{website}</p>
          <h3>Company:</h3>
          <p>{company.name}</p>
        </Fragment>
      ) : null}
    </div>
  );
};

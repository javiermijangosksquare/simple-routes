import React from "react";
import "./NavBar.css";
import { withRouter } from "react-router-dom";

export const NavBarComponent = props => {
  const { handleClick, userName, history } = props;

  const handleOnClick = e => {
    const liList = document.querySelectorAll("li");
    liList.forEach(elem => {
      elem.classList.remove("active");
    });
    e.target.classList.add("active");
    handleClick(e.target.textContent);
  };

  const routeHome = e => {
    handleOnClick(e);
    return history.push("/home");
  };

  const routeList = e => {
    handleOnClick(e);
    return history.push("/list");
  };

  const routePosts = e => {
    handleOnClick(e);
    return history.push("/post");
  };

  return (
    <nav>
      <ul>
        <li className={"active"} onClick={routeHome}>
          Home
        </li>
        <li onClick={routeList}>List</li>
        <li onClick={routePosts}>Posts</li>
      </ul>
      <span>{userName ? userName : ""}</span>
    </nav>
  );
};

export const NavBar = withRouter(NavBarComponent);

import React from "react";
import "./NavBar.css";

export const NavBar = props => {
  const { handleClick } = props;

  const handleOnClick = e => {
    const liList = document.querySelectorAll("li");
    liList.forEach(elem => {
      elem.classList.remove("active");
    });
    e.target.classList.add("active");
    handleClick(e.target.textContent);
  };

  return (
    <nav>
      <ul>
        <li className={"active"} onClick={handleOnClick}>
          Home
        </li>
        <li onClick={handleOnClick}>List</li>
      </ul>
    </nav>
  );
};

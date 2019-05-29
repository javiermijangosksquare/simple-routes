import React from "react";
import "./Paper.css";

export const PaperLogin = props => {
  const {
    handleClick,
    handleChange,
    inputValue,
    isDisabled,
    showFiledTxt
  } = props;
  return (
    <div className={"paperContainer"}>
      <h1>Log in</h1>
      <hr />
      <form>
        <label>Email</label>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          disabled={isDisabled}
        />
        <button
          onClick={handleClick}
          className={"button"}
          disabled={isDisabled}
        >
          Log In
        </button>
        <span> {showFiledTxt ? "Not a correct email" : ""}</span>
      </form>
    </div>
  );
};

import React from "react";
import "./Login.css";
import { withRouter, Redirect } from "react-router-dom";
import { PaperLogin } from "../../Components/Paper/PaperLogin";

class LoginPageComponent extends React.Component {
  state = {
    authenticating: false,
    isAuth: false,
    failedLogin: false,
    inputValue: ""
  };

  // componentDidMount() {
  //   this.fetchUsers().then(data => this.setState({ data }));
  // }
  handleOnChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  fetchUsers = () => {
    const res = fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()
    );
    return res;
  };

  getAuthUser = (userMail, listUsers) => {
    return listUsers.find(user => user.email === userMail);
  };

  handleOnClick = async e => {
    e.preventDefault();
    this.setState({ authenticating: true });
    const authUser = await this.fetchUsers().then(data =>
      this.getAuthUser(this.state.inputValue, data)
    );
    if (authUser) {
      //TODO Save user on local storage
      localStorage.setItem("userInfo", JSON.stringify(authUser));
      return this.setState({ isAuth: true, failedLogin: false });
    }
    return this.setState({
      isAuth: false,
      failedLogin: true,
      authenticating: false
    });
  };

  render() {
    const { inputValue, authenticating, failedLogin, isAuth } = this.state;

    if (isAuth) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className={"mainContainer"}>
        <PaperLogin
          handleClick={this.handleOnClick}
          handleChange={this.handleOnChange}
          inputValue={inputValue}
          isDisabled={authenticating}
          showFiledTxt={failedLogin}
        />
      </div>
    );
  }
}

export const LoginPage = withRouter(LoginPageComponent);

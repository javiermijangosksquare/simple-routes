import React, { Fragment } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PostPage } from "../PostsPage/PostPage";
import { ListPage } from "../ListPage/ListPage";
import { HomePage } from "../HomePage/HomePage";
import { InfoPage } from "../InfoPage/InfoPage";
import { LoginPage } from "../Login/LoginPage";
import { StorageContext } from "../../Providers/Storage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class Main extends React.Component {
  state = {
    contentSelected: "Home"
  };

  handleOnClick = contentName => {
    this.setState({ contentSelected: contentName });
  };
  static contextType = StorageContext;
  render() {
    const user = this.context.getUserInfo();
    const userName = user ? user.name : null;
    return (
      <Fragment>
        <Router>
          <NavBar handleClick={this.handleOnClick} userName={userName} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/list" component={ListPage} />
          <Route path="/post" component={PostPage} />
          <Route path="/user/:userId" component={InfoPage} />
        </Router>
      </Fragment>
    );
  }
}

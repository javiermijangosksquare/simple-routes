import React, { Fragment } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { ListPage } from "../ListPage/ListPage";
import { HomePage } from "../HomePage/HomePage";
import { InfoPage } from "../InfoPage/InfoPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class Main extends React.Component {
  state = {
    contentSelected: "Home"
  };

  handleOnClick = contentName => {
    this.setState({ contentSelected: contentName });
  };

  render() {
    return (
      <Fragment>
        <Router>
          <NavBar handleClick={this.handleOnClick} />
          <Route exact path="/" component={HomePage} />
          <Route path="/list" component={ListPage} />
          <Route path="/user/:userId" component={InfoPage} />
        </Router>
      </Fragment>
    );
  }
}

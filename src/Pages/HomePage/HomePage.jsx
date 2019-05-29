import React from "react";
import "./HomePage.css";
import { BgImage } from "../../Components/BgImage/BgImage";
import { Redirect } from "react-router-dom";
import { StorageContext } from "../../Providers/Storage";

export class HomePage extends React.Component {
  static contextType = StorageContext;

  render() {
    const user = this.context.getUserInfo();

    if (!user) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className={"imageContainer"}>
        <BgImage />
      </div>
    );
  }
}

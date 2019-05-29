import React from "react";

export const StorageContext = React.createContext({
  getUserInfo: () => {}
});

export class StorageProvider extends React.Component {
  getUserInfo = () => {
    return JSON.parse(localStorage.getItem("userInfo"));
  };

  render() {
    const { children } = this.props;
    return (
      <StorageContext.Provider value={{ getUserInfo: this.getUserInfo }}>
        {children}
      </StorageContext.Provider>
    );
  }
}

export const StorageConsumer = StorageContext.Consumer;

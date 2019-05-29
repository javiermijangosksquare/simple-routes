import React from "react";
import { Main } from "./Pages/MainPage/Main";
import { StorageProvider } from "./Providers/Storage";

const App = () => {
  return (
    <StorageProvider>
      <Main />
    </StorageProvider>
  );
};

export default App;

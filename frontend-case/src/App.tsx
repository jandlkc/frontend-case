import React from "react";
import Home from "./layout/home";
import { Provider } from "react-redux";
import store from "./Store/index";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

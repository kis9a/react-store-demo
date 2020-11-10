import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import InputSection from "./components/InputSection";
import NoteSection from "./components/NoteSection";

const App = () => {
  return (
    <Provider store={store}>
      <InputSection />
      <NoteSection />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

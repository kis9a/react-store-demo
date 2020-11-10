import React from "react";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import InputSection from "./components/InputSection";
import TodosSection from "./components/TodosSection";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <InputSection />
        <TodosSection />
      </div>
    </Provider>
  );
}

export default App;

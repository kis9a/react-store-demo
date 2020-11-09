import React from "react";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import InputSection from "./components/InputSection";
import TodosSection from "./components/TodosSection";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ReduxTodos = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <InputSection />
        <TodosSection />
      </div>
    </Provider>
  );
};

const Top = () => {
  return (
    <div>
      <ReduxTodos />
      <h1>Hello</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="header">
          <Link className="pl" to={"/"}>
            Home
          </Link>
        </div>
        <div className="app-container">
          <Switch>
            <Route path="/" component={Top} exact />
          </Switch>
        </div>
      </React.StrictMode>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

import "./index.css";
import Home from "./home";
import Todo from "./todo";
import Completion from "./completion";

const TodoApp = () => (
  <div className="todo-app">
    <header>
      <h2>Welcome come to the TodoApp</h2>
      <h3>论文开题报告demo</h3>
    </header>
    <main>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={Todo} />
            <Route path="/completion" component={Completion} />
            <Redirect to="/" />
          </Switch>
          <NavLink to="/" exact activeClassName="link__actived">
            <button>首页</button>
          </NavLink>
          <NavLink to="/todo" activeClassName="link__actived">
            <button>你的事项</button>
          </NavLink>
          <NavLink to="/completion" activeClassName="link__actived">
            <button>完成情况</button>
          </NavLink>
        </div>
      </Router>
    </main>
    <footer>
      <h4>copyright@Keylenn</h4>
    </footer>
  </div>
);
export default TodoApp;

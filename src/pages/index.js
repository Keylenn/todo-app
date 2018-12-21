import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

import style from "./index.scss";
import Header from "../components/Header/Header";
import SliderMenu from "../components/SliderMenu/SliderMenu"
import Home from "./home";
import Todo from "./todo";
import Completion from "./completion";
import Footer from "../components/Footer/Footer";

const TodoApp = () => (
  <div className={style.todoApp}>
    <Header />
    <SliderMenu />
    <main>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={Todo} />
            <Route path="/completion" component={Completion} />
            <Redirect to="/" />
          </Switch>
          <NavLink to="/" exact activeClassName={style.actived}>
            <button>首页</button>
          </NavLink>
          <NavLink to="/todo" activeClassName={style.actived}>
            <button>你的事项</button>
          </NavLink>
          <NavLink to="/completion" activeClassName="link__actived">
            <button>完成情况</button>
          </NavLink>
        </div>
      </Router>
    </main>
    <Footer />
  </div>
);
export default TodoApp;

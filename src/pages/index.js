import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
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
    <div className={style.container}>
      <SliderMenu />
      <main className={style.mainContent}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo" component={Todo} />
              <Route path="/completion" component={Completion} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </main>
    </div>
    <Footer />
  </div>
);
export default TodoApp;

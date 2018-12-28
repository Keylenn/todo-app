import React from "react";

import PagesTodoAddTodo from "./AddTodo"
import PagesTodoList from "./List"
import PagesTodoFilter from "./Filter"
import style from "./index.scss"

const Todo = () => (
  <div>
    <PagesTodoAddTodo />
    <PagesTodoList />
    <PagesTodoFilter />
  </div>
);
export default Todo;

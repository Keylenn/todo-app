import React from "react";

import PagesTodoAddTodo from "./AddTodo"
import PagesTodoList from "./List"
import PagesTodoFilter from "./Filter"


const Todo = () => (
  <div>
    <PagesTodoAddTodo />
    <PagesTodoList />
    <PagesTodoFilter />
  </div>
);
export default Todo;

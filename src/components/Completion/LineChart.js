import React from "react";
import BasicLineChart from "../UI/BasicLineChart";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  todos: state.todos
});

const CompletionLineChart = (props)=>{
  console.log('CompletionLineChart_props', props);
  let xValue = [];
  let yValue = [];
  const { todos } = props;
  const completedTodos = todos.filter(todo => todo.completed);
  completedTodos.map(todo => xValue.push(todo.text));
  completedTodos.map(todo => yValue.push(todo.completion));
  return(
    <BasicLineChart xValue={xValue} yValue={yValue} />
  );
};

export default connect(mapStateToProps)(CompletionLineChart);
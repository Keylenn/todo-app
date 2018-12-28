import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {toggleTodo} from "../TodosRedux";
import {List} from "antd";

import TodosListItem from "./ListItem";



const mapStateToProps = state =>({
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = dispatch => {
  const boundActionCreators = bindActionCreators({
    toggleTodo
  }, dispatch);
  return {...boundActionCreators};
}

const selectVisibledTodos =  (todos, filter) =>{
    switch (filter){
        case 'ALL':
            return todos;
        case 'COMPLETED':
            return todos.filter(item => item.completed);
        case 'UNCOMPLETED':
            return todos.filter(item => !item.completed);
        default:
            return todos;
    }
};

const TodosList = props =>{
    const { todos, filter, toggleTodo } = props;
    const visibledTodos = selectVisibledTodos(todos, filter);
    return(
      <List
        dataSource={visibledTodos}
        renderItem={ item =>  <TodosListItem
          key = {item.id}
          id = {item.id}
          text={item.text}
          completed={item.completed}
          completion={item.completion}
          onToggle={ () => toggleTodo(item.id) } />}
      />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);


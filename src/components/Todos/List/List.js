import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {toggleTodo} from "../TodosRedux";

import TodosListItem from "./ListItem";
import TodosListCompletion from "./Completion";


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
        <ul>
            {
                visibledTodos.length === 0
                ?  <p>暂无数据</p>
                : visibledTodos.map( item => (
                    <div key={item.id}>
                        <TodosListItem
                            text={item.text}
                            completed={item.completed}
                            onToggle={ () => toggleTodo(item.id) } />
                        <TodosListCompletion
                            completed={item.completed}
                            id={item.id}/>
                    </div>
                ))
            }
        </ul>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);


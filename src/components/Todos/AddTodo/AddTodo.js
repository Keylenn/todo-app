import React,{Component} from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {addTodo} from "../TodosRedux";

/*const mapStateToProps = state => ({
  todos: state.todos
});*/

const mapDispatchToProps = dispatch =>{
  const boundActionCreators = bindActionCreators({
    addTodo
  }, dispatch);
  return {...boundActionCreators};
}


class TodosAddTodo extends Component{
  constructor(props){
    super(props);
    this._refInput = this._refInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _refInput(node){
    this.input = node;
  }

  handleSubmit(e){
    e.preventDefault();
    const input = this.input;
    if(!input.value.trim()){
      return;
    }
    const {addTodo} = this.props;
    addTodo(input.value);
    /*if(window.localStorage){
        console.log(localStorage);
        let key = localStorage.length + 1
        localStorage[key] = input.value;
    }*/
    input.value='';
  }

  render(){
    return(
      <form onSubmit={ this.handleSubmit }>
        <input ref={ this._refInput } />
        <button type="submit">添加</button>
      </form>
    );
  }
}


export default connect(null, mapDispatchToProps)(TodosAddTodo);

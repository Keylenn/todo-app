import React,{Component} from "react";
import { Form, Input, Button } from 'antd';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {addTodo} from "../TodosRedux";


const { TextArea } = Input;

/*const mapStateToProps = state => ({
  todos: state.todos
});*/

const mapDispatchToProps = dispatch =>{
  const boundActionCreators = bindActionCreators({
    addTodo
  }, dispatch);
  return {...boundActionCreators};
}

@Form.create()
@connect(null, mapDispatchToProps)
class TodosAddTodo extends Component{

  handleSubmit = e => {
    e.preventDefault();
    const {validateFields, setFieldsValue} =this.props.form
    validateFields((err, fieldsValue) => {
      if(err){
        return;
      }
      console.log(fieldsValue);
      const { addTodo } = this.props;
      const { todo } = fieldsValue;
      addTodo(todo);
      setFieldsValue({
        todo:''
      })
    });
  }

  render(){
    const initStyle = {
      textArea: {
        width: 400
      },
      addButton: {
        marginTop: '3px',
      }
    }
    const { getFieldDecorator } = this.props.form;
    return(
      <Form layout="inline"  onSubmit={ this.handleSubmit }>
        <Form.Item>
          {getFieldDecorator('todo', {
            rules: [{
              required: true, message: '待办事项不能为空',
            }],
          })(
            <TextArea placeholder="请输入您的待办事项"
                      autosize={{ minRows: 1, maxRows: 3 }}
                      style={initStyle.textArea} />
          )}
        </Form.Item>
        <Button type="primary"
                icon="plus"
                style={initStyle.addButton}
                htmlType="submit">
          添加
        </Button>
      </Form>
    );
  }
}

export default TodosAddTodo;

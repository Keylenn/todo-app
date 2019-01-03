import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {addCompletion} from "../TodosRedux";

import { Form, Input , Button } from 'antd';

const mapDispatchToProps = dispatch => {
  const boundAcitonCreators = bindActionCreators({
    addCompletion
  }, dispatch);
  return {...boundAcitonCreators};
};

@Form.create()
@connect(null, mapDispatchToProps)
class TodosListCompletion extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const {validateFields} =this.props.form
    validateFields((err, fieldsValue) => {
      if(err){
        return;
      }
      const {id, addCompletion, setCompletion } = this.props;
      const { completion } = fieldsValue;
      addCompletion(id, completion);
      setCompletion(completion);
    });
  }


  render() {
    const {completed, completion} = this.props;
    const { getFieldDecorator } = this.props.form;
    const inilineStyle = {
      showWithCompleted: {
        display: completed ? 'inline-block' : 'none'
      },
      input: {
        width: 100
      },
     addButton: {
       marginTop: '3px',
     }
    }
    return (
      <Form layout="inline"  onSubmit={ this.handleSubmit } style={inilineStyle.showWithCompleted}>
        <Form.Item>
          {getFieldDecorator('completion', {
            initialValue: completion,
            rules: [
              { required: true, message: '完成度不能为空'},
              { pattern: /^(10|[1-9]){1}$/, message: '请输入1-10' }
            ],
          })(

              <Input
                placeholder="请输入1-10"
                autoFocus
                style={inilineStyle.input}
              />
          )}
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={inilineStyle.addButton}
        >
          确定
        </Button>
      </Form>
    );
  }
}

TodosListCompletion.propTypes ={
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default TodosListCompletion;
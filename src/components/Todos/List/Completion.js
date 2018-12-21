import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {addCompletion} from "../TodosRedux";

const mapDispatchToProps = dispatch => {
  const boundAcitonCreators = bindActionCreators({
    addCompletion
  }, dispatch);
  return {...boundAcitonCreators};
};

class TodosListCompletion extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value: ''
    }
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnInputChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleOnClick(){
    const {id, addCompletion } = this.props;
    const inputValue = this.state.value;
    if(!inputValue.trim()){
      return;
    }
    console.log(addCompletion);
    addCompletion(id, inputValue);
    this.setState({
      value: ''
    });
  }

  render() {
    const {completed} = this.props;
    const style = {
      compeltionStyle: {
        display: completed ? 'inline-block' : 'none'
      }
    }
    return (
      <div style={style.compeltionStyle}>
        <input type="number"
               placeholder="请输入您的完成度( 1-10 )"
               value={this.state.value}
               onChange={this.handleOnInputChange}/>
        <button onClick={this.handleOnClick}>确定</button>
        <button>取消</button>
      </div>
    );
  }
}

TodosListCompletion.propTypes ={
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default connect(null,mapDispatchToProps)(TodosListCompletion);
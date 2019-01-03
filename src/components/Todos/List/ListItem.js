import React, {Component} from "react";
import PropTypes from "prop-types";
import { List, Checkbox, Icon, Popover } from "antd";
import TodosListCompletion from "./Completion";

const ListItem = List.Item;


class TodosListItem extends Component {
  state = {
    visible: false,
    completion: this.props.completion || 0
  }

  handleVisibleChange = (visible) => this.setState({ visible });

  setCompletion = (completion) => {
    this.setState({
      visible: false,
      completion
    });
  }

  render(){
    const { onToggle, completed, text, id, completion} = this.props;
    console.log('props', this.props);
    const inlineStyle = {
      showWithCompleted: {
        display: completed ? 'inline-block' : 'none'
      },
      liTextStyle: {
        textDecoration: completed ? 'line-through' : 'none'
      }
    };
    return(
      <ListItem
        style={inlineStyle.liTextStyle}
        actions={[
          <Popover
            placement="bottom"
            content={
              <TodosListCompletion
                completed={completed}
                completion={completion}
                id={id}
                setCompletion={this.setCompletion}
              />
            }
            title="填写完成情况"
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <a
              style={inlineStyle.showWithCompleted}
              onClick={this.showModal}
            >
              {
                this.state.completion <= 0 || this.state.completion > 10
                  ? (<span>
                      <Icon type="edit"/>
                      完成情况
                    </span>)
                  : <span>完成度：{this.state.completion}</span>
              }
            </a>
          </Popover>
        ]}
      >
        <Checkbox
          checked={ completed }
          onChange={onToggle}
        >
          {text}
        </Checkbox>
      </ListItem>
    );
  }
}

TodosListItem.propTypes ={
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodosListItem;
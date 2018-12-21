import React from "react";
import PropTypes from "prop-types";

const TodosListItem = ({ onToggle, completed, text })=>{

  const style = {
    liTextStyle: {
      textDecoration: completed ? 'line-through' : 'none'
    }
  };

  return(
      <li style={style.liTextStyle}>
        <input type="checkbox"  checked={ completed } onChange={onToggle} />
        <label>{text}</label>
      </li>
  );
}

TodosListItem.propTypes ={
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodosListItem;
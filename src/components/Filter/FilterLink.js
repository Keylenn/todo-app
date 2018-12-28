import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setFilter} from "./FilterRedux";
import {Button} from "antd";

const mapStateToProps = state =>({
    filterState: state.filter
});
const mapDispatchToProps = dispatch =>{
    const boundActionCreators = bindActionCreators({
        setFilter
    }, dispatch);
    return {...boundActionCreators};
};


const FilterLink = props => {
    const {name, filterState, filterType, setFilter} = props;
    const actived =  filterState === filterType;
    const inlineStyle = {
      button: {
        marginRight: '.5rem'
      }
    }
    return (
        <Button
          type="primary"
          disabled={actived}
          onClick={()=>setFilter(filterType)}
          style={inlineStyle.button}
        >
            {name}
         </Button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setFilter} from "./FilterRedux";

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
    return (
        <button disabled={actived} onClick={()=>setFilter(filterType)}>
            {name}
         </button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
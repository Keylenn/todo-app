import React from "react";
import FilterLink from "./FilterLink";

const Filter = ()=>{
    return(
        <div>
            <FilterLink filterType="ALL" name="全部" />
            <FilterLink filterType="COMPLETED" name="已完成" />
            <FilterLink filterType="UNCOMPLETED" name="未完成" />
        </div>
    );
}

export default Filter;

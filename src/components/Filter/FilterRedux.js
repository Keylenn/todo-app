/**
 * reducer__filter
*/
const filter = (state= 'ALL', action) =>{
    const {type, filter} = action;
    switch(type){
        case 'SET_FILTER':
            return filter;
        default:
            return state;
    }
}

/**
 * actionCreators
 */
const setFilter =  filter =>({
    type: 'SET_FILTER',
    filter
});






export { filter, setFilter };
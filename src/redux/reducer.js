import { combineReducers } from "redux";
import {todos} from "../components/Todos/TodosRedux";
import {filter} from "../components/Filter/FilterRedux";

const reducer = combineReducers({
  todos,
  filter
});

export default  reducer;



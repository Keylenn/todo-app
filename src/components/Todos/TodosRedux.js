const todos = (state = [], action) => {
  const { type, id, text, completion } =action;
  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id,
          text,
          completed: false,
          completion: 0
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed,completion: 0 } : todo
      );
    case "ADD_COMPLETION":
      console.log(action);
      return state.map(todo =>
        todo.id === id ? { ...todo, completion } : todo
      );
    default:
      return state;
  }
};

let nextTodoId = 0;
const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

const addCompletion = (id, completion) => ({
  type: "ADD_COMPLETION",
  id,
  completion
})

export { todos, addTodo, toggleTodo, addCompletion };
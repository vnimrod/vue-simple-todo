export const state = () => ({
  myTodos: [
    {
      id: 1,
      todo: "Walking with the dogs"
    }
  ]
});

export const mutations = {
  addTodo(state, todoItem) {
    state.myTodos = [...state.myTodos, todoItem];
  },
  deleteTodo(state, id) {
    state.myTodos = state.myTodos.filter(todo => todo.id !== id);
    console.log(id)
  }
};

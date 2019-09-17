import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(baseUrl);
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(baseUrl, {
      title,
      completed: false
    });
    commit("newTodo", response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`${baseUrl}/${id}`);
    commit("removeTodo", id);
  },

  async filterTodos({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const response = await axios.get(`${baseUrl}?_limit=${limit}`);
    commit("setTodos", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};

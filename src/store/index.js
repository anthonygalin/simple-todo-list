import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: [
      {
        name: "Correr",
        marked: true,
      },
      {
        name: "Caminar",
        marked: false,
      },
      {
        name: "Gatear",
        marked: false,
      },
    ],
  },
  getters: {
    todos(state) {
      return state.todoItems;
    },
  },
  mutations: {
    async setTodos(state, todos) {
      state.todoItems = await todos;
    },
    setPushedTodo(state, todo) {
      state.todoItems.push(todo);
    },
    setDeleteTodo(state, todo) {
      const findTodo = state.todoItems.find((item) => item === todo);
      state.todoItems.splice(findTodo, 1);
    },
  },
  actions: {
    getTodos({ state, commit }) {
      const todos = state.todoItems;
      commit("setTodos", todos);
    },
    pushTodos({ commit }, todo) {
      commit("setPushedTodo", todo);
    },
    deleteTodo({ commit }, todo) {
      commit("setDeleteTodo", todo);
    },
  },
  modules: {},
});

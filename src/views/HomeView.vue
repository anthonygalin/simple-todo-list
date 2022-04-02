<template>
  <main class="grid justify-items-center items-center h-screen">
    <todo-list @addTodo="addTodo" @deleteTodo="deleteTodo" :items="todos" />
  </main>
</template>

<script>
// @ is an alias to /src

import todoList from "@/components/todoList";

export default {
  name: "HomeView",
  components: {
    todoList,
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch("pushTodos", todo);
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
    },
  },
};
</script>

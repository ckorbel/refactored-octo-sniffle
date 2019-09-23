<template>
  <div id="app">
      <Navbar />
    </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/Todos/AddTodo";
import FilterTodos from "./components/Todos/FilterTodos";

export default {
  name: "app",
  components: {
    Navbar,
    Auth
    // Todos,
    // AddTodo,
    // FilterTodos
  },

  data() {
    return {};
  }
};
</script>

<style>

</style>

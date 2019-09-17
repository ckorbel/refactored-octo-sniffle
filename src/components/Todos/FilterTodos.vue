<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">300</option>
      <option value="50">60</option>
      <option value="25">25</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",

  methods: {
    ...mapActions(["filterTodos"])
  }
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883;
}
</style>
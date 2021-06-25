<template>
  <div class="todo-list">
    <TodoItem v-for="todo in myTodos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['myTodos'])
  }
};
</script>

<style scoped>
  .todo-list{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
</style>
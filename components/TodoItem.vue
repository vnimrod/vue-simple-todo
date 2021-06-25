<template>
  <ul class="todo-item">
    <li>{{ todo.todo }}</li>
    <button
      @click="() => deleteTodo(todo.id)"
      type="button"
      class="button button2"
    >
      x
    </button>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    todo: Object
  },

  methods: {
    ...mapMutations(["deleteTodo"])
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  list-style: none;
  box-shadow: inset 0 0 4px #000000;
  background-color: #faf0e7;
}

li {
  word-break: break-word;
  width: 250px;
}

.button {
  align-self: center;
  margin-left: 1vw;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 10px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button2 {
  background-color: white;
  color: black;
  border: 2px solid #f44336;
  margin-left: 10px;
}
.button2:hover {
  background-color: #f44336;
  color: white;
}
</style>

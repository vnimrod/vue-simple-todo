<template>
  <div class="continer">
    <form class="form-elements" @submit="onSubmit">
      <input type="text" placeholder="Enter Todo" v-model="todo" />
      <button class="button button1" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      id: 1,
      todo: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.id += 1;
      if (!this.todo) {
        alert("add todo");
      }

      const newTodo = {
        id: this.id,
        todo: this.todo
      };

      if (this.todo) {
        this.addTodo(newTodo);
      }
      this.todo = "";
    },

    ...mapMutations(["addTodo"])
  }
};
</script>

<style scoped>
.form-elements {
  display: flex;
  justify-content: center;
}
input {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.button {
  align-self: center;
  margin-left: 1vw;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 0;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  margin-left: 1vw;
}
.button1:hover {
  background-color: #4caf50;
  color: white;
}
</style>

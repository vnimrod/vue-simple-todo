<template>
  <div class="app-container">
    <div>
      <AddTodo />
      <TodoList />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
body{
  background-color: #778899;
}
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vw;
}
</style>

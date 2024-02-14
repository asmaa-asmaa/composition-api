<template>
  <div class="show-todos">
    <h1>show todos</h1>
    <table style="width: 100%" v-if="todoList.length">
      <thead>
        <tr>
          <th>text</th>
          <th>from</th>
          <th>to</th>
          <th>createdAt</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.isCompleted ? 'background: green' : 'background: transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button @click="markCompleted(todo)">
                {{ todo.isCompleted ? "completed" : "incompleted" }}
              </button>
              <button @click="deleteTodo(index)">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else>no todos to show</h2>
  </div>
</template>
<script setup>
//import { onMounted, ref } from "vue";
import todoMixins from "@/mixins/todoMixins";
const { todoList, addToLocalSt } = todoMixins();

//const todoList = ref([]);
//const updateTodos = () => {
//if (localStorage.getItem("todos")) {
//todoList.value = JSON.parse(localStorage.getItem("todos"));
//}
//};
//onMounted(() => {
//updateTodos();
//});

const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  addToLocalSt();
};
//const addToLocalSt = () => {
// localStorage.setItem("todos", JSON.stringify(todosList.value));
//};
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  addToLocalSt();
};
</script>

import { ref, onMounted } from "vue";
const todosFunction = () => {
  const todoList = ref([]);
  const addToLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(todoList.value));
  };
  const UpdateTodos = () => {
    if (localStorage.getItem("todos")) {
      todoList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };
  onMounted(() => {
    UpdateTodos();
  });
  return { todoList, addToLocalSt };
};
export default todosFunction;

<template>
  <div class="home">
    <h1>add new todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        v-model="todoObject.text"
        name=""
        placeholder="enter your todo"
        required
      />
      <br />
      <input
        type="date"
        v-model="todoObject.from"
        placeholder="from"
        required
        style="margin-top: 20px"
      />
      <input
        type="date"
        v-model="todoObject.to"
        placeholder="to"
        required
        style="margin-right: 20px; margin-bottom: 20px"
      />
      <br />
      <input type="submit" value="add" />
    </form>
    <h2 v-colorize="'red'" v-maxSize="50">this is home page</h2>
    <!--<h2>my name is {{ name }} {{ lastName }}</h2>-->
    <h2>my name is {{ firstName }} {{ lastName }}</h2>
    <h3>age is {{ age }}</h3>
    <h4>user active is {{ isActive }}</h4>
    <h5>
      there is user called {{ userObject.name }} age is {{ userObject.age }}
    </h5>
    <h3>first number is {{ myArr[0] }}</h3>
    <input type="text" v-model="age" />
    <button @click="sayHello">say hello</button>
    <h4 ref="welcEl">{{ welcomeUser }}</h4>
    <h4>{{ afterYears }}</h4>
    <TheComp @handleClick="executeFunction" :userName="name" :userAge="age" />
    <CompTwo />

    <h2>counter is {{ counter }}</h2>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
    <h3>counter two is {{ counterr }}</h3>
    <button @click="counterr++">increase two</button>
    <button @click="myArrr.push(counterr)">push counterr value</button>
  </div>
</template>

<!--<script>
export default {
  data() {
    return {
      name: "asmaa",
    }; 
  },
  setup() {
    const lastName = "mohamed";
    return { lastName };
  },
};
</script>-->

<!--<script setup>
const firstName = "asmaa";
const lastName = "mohamed";
</script>-->

<script setup>
import { ref, reactive, computed, watch, provide } from "vue";
import TheComp from "@/components/MyComponent.vue";
import CompTwo from "@/components/ComponentTwo.vue";
import { useRouter, useRoute } from "vue-router";

const firstName = ref("asmaa");
const lastName = ref("mohamed");
const age = ref(32);
const isActive = ref(true);
const userObject = ref({
  name: "sami mohamed",
  age: 25,
});
const myArr = reactive([1, 2, 3, 4]);
const welcEl = ref(null);
//const welcEl = ref("asmaa");
console.log(welcEl.value);

setTimeout(() => {
  console.log(welcEl.value);
}, 2000);

const name = ref("asmaa mohamed");
const welcomeUser = computed(
  () => `hello, ${name.value}, your age is ${age.value}`
);
const afterYears = computed(() => {
  return `hey, ${name.value}, your age will be ${
    age.value + 5
  } after five years`;
});
function sayHello() {
  console.log(age);
  console.log(age.value);
  age.value++;
}
const router = useRouter();
console.log("router from view", router);
const route = useRoute();
console.log("route from view", route.name);

const executeFunction = () => {
  console.log("executed");
};
const vColorize = {
  mounted: (el, data) => {
    console.log(el);
    console.log(data.value);
    el.style.color = data.value;
  },
};
import counterFunction from "@/mixins/counter";
const { counter, increase, decrease } = counterFunction();

const counterr = ref(0);
const myArrr = ref([]);
watch(
  () => counterr.value,
  (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
  }
);
watch(
  () => myArrr.value,
  (newVal) => {
    console.log(newVal);
  },
  { deep: true }
);

provide("nname", firstName.value);
provide("aage", age.value);
const sayHHello = () => {
  console.log("hello" + " " + firstName.value);
};
provide("sayHelloo", sayHHello);

import { onBeforeMount, onBeforeUpdate, onUpdated } from "vue";
onBeforeMount(() => {
  console.log("beforemounted");
});
//onMounted(() => {
//console.log("mounted");
//});
onBeforeUpdate(() => {
  console.log("before update");
});
onUpdated(() => {
  console.log("update");
});
import { inject, onMounted } from "vue";
const emitter = inject("emitter");
onMounted(() => {
  emitter.on("globalEmit", (e) => {
    console.log("fired global event:" + e);
  });
});

import todoMixins from "@/mixins/todoMixins";
const { todoList, addToLocalSt } = todoMixins();
//const todoList = ref([]);
const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});
const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoObject.value.createdAt = new Date();
  todoList.value.push(todoObject.value);
  console.log(todoList.value);
  addToLocalSt();
  alert("todo was added successfully");
  todoObject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };
};

//const addToLocalSt = () => {
//localStorage.setItem("todos", JSON.stringify(todoList.value));
//};
//const UpdateTodos = () => {
//if (localStorage.getItem("todos")) {
//todoList.value = JSON.parse(localStorage.getItem("todos"));
//}
//};
//onMounted(() => {
//UpdateTodos();
//});
</script>
<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 20px;
    background-color: aquamarine;
    border: 1px solid rgb(3, 51, 47);
    border-radius: 7px;
    margin-left: 20px;
  }
}
</style>

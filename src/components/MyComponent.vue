<template>
  <div class="comp">
    <h2>this is component</h2>
    <h3>name is {{ props.userName }} , age is {{ props.userAge }}</h3>
    <button @click="emits('handleClick')">Emit Event</button>
    <h4>first name is : {{ firstName }} and {{ age }}</h4>
    <button @click="sayHHello">say hello</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
});
import { defineEmits } from "vue";
const emits = defineEmits(["handleClick"]);

import { inject } from "vue";
const firstName = inject("nname");
const age = inject("aage");
const sayHHello = inject("sayHelloo");
</script>

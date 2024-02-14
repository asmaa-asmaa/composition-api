<template>
  <button @click="fireEmit">click me</button>
</template>
<script setup>
import { inject } from "vue";
const emitter = inject("emitter");
console.log(emitter);
const fireEmit = () => {
  emitter.emit("globalEmit", "asmaa");
};
</script>

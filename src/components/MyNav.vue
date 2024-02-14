<template>
  <div class="nav">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{
          route.meta.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
</script>
<style scoped lang="scss">
.nav ul {
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 10px;
  background-color: aquamarine;
  a {
    text-decoration: none;
    font-size: 20px;
    &.router-link-active {
      text-decoration: underline;
    }
  }
}
</style>

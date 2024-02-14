<template>
  <div class="second-component">
    <h1>second component</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("router from component two", this.$router);
    console.log("route from component two", this.$route);
  },
};
</script>

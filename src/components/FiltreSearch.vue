<template>
  <div id="appSearch">
    <input @keyup.enter="search" /> <br /><input @keyup.enter="search" />

    <!-- <div v-for="r of resultQuery" :key="r.id">{{ r.title }}</div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["search", "search"],
};
</script>
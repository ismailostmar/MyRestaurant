<template>
  <div id="appSearch">
    Chercher par mot Clé :
    <input @keyup.enter="search" v-model="searchWord" />
    <!-- <div v-for="r of resultQuery" :key="r.id">{{ r.title }}</div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["search"],
  data() {
    return {
      searchWord: null,
      //   resources: [],
    };
  },
  computed: {
    // resultQuery() {
    //   if (this.searchQuery) {
    //     return this.resources.filter((item) => {
    //       return this.searchQuery
    //         .toLowerCase()
    //         .split(" ")
    //         .every((v) => item.title.toLowerCase().includes(v));
    //     });
    //   } else {
    //     return this.resources;
    //   }
    // },
  },
};
</script>
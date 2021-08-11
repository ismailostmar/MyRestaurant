<template>
  <div id="app">
    <div class="container">
      <label> Chercher par mot Clé : &nbsp; </label>
      <input v-model="searchWord" />
      <TableDataRes :listRestaurant="getListRestaurant" />
    </div>
  </div>
</template>

<script>
import TableDataRes from "./components/TableDataRes.vue";

import axios from "axios";
export default {
  components: {
    TableDataRes,
  },

  data() {
    return {
      searchWord: "",
      listRestaurant: [],
    };
  },

  computed: {
    //get the list of restaurant filtred by restaurant name
    getListRestaurant() {
      return this.listRestaurant.filter((restaurant) => {
        return restaurant.restaurant.match(this.searchWord);
      });
    },
  },

  methods: {
    getRestaurantData() {
      axios
        .get("Restaurant.json")
        .then((response) => (this.listRestaurant = response.data))
        .catch((error) => console.log(error));
    },
  },

  // au moment de la creation du componentsl
  created() {
    this.getRestaurantData();
  },
};
</script>
<template>
  <div id="app">
    <div class="container">
      <label for="owner"> Search :</label> &nbsp;
      <input id="owner" v-model="search" /><br />

      <!-- <label for="restaurant"> restaurant </label>
      <input id="restaurant" v-model="search.restaurant" /><br /> -->
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
      search: "",
      listRestaurant: [],
    };
  },

  computed: {
    //get the list of restaurant filtred by restaurant name
    getListRestaurant() {
      return this.listRestaurant.filter((restaurant) => {
        return (
          restaurant.owner.match(this.search) ||
          restaurant.restaurant.match(this.search) ||
          restaurant.ville.match(this.search) ||
          restaurant.type.match(this.search)
        );
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

  // au moment de la creation du components
  created() {
    this.getRestaurantData();
  },
};
</script>
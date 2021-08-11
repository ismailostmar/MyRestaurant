<template>
  <div id="app">
    <div class="container">
      <label> Chercher par mot Clé : &nbsp; </label> <br />
      <input v-model="search.owner" /><br />
      <input v-model="search.restaurant" /><br />
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
      search: {
        owner: "",
        restaurant: "",
      },
      listRestaurant: [],
    };
  },

  computed: {
    //get the list of restaurant filtred by restaurant name
    getListRestaurant() {
      return this.listRestaurant.filter((restaurant) => {
        return restaurant.owner.match(this.search.owner);
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
    // this fait reference à l'objet ( export default)
    this.getRestaurantData();
  },
};
</script>
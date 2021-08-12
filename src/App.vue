<template>
  <div id="app">
    <div>
      <!-- Button toggle  -->
      <b-button v-b-toggle.sidebar-1>
        <b-col md="1" class="mb-1">
          <b-icon icon="three-dots" animation="cylon" font-scale="1"></b-icon>
        </b-col>
      </b-button>

      <!-- Sidebar  -->
      <b-sidebar id="sidebar-1" title="Restaurant" shadow>
        <label for="owner" font> Owner :</label>
        <input id="owner" v-model="search.owner" /><br />

        <label for="owner"> Restaurant :</label>
        <input id="owner" v-model="search.restaurant" /><br />

        <label for="owner"> Ville : :</label>
        <input id="owner" v-model="search.ville" /><br />

        <label for="owner"> Type :</label>
        <input id="owner" v-model="search.type" /><br />
      </b-sidebar>
      <!-- Sidebar  -->
    </div>
    <div class="container">
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
        ville: "",
        type: "",
      },
      listRestaurant: [],
    };
  },

  computed: {
    //get the list of restaurant filtred by restaurant name
    getListRestaurant() {
      return this.listRestaurant.filter((restaurant) => {
        return (
          restaurant.owner.match(this.search.owner) &&
          restaurant.restaurant.match(this.search.restaurant) &&
          restaurant.ville.match(this.search.ville) &&
          restaurant.type.match(this.search.type)
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
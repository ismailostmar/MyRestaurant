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
        <div class="card">
          <div class="col">
            <label for="owner" font> Owner :</label>
            <input
              id="owner"
              class="form-control"
              v-model="search.owner"
            /><br />
          </div>
          <div class="col">
            <label for="restaurant"> Restaurant :</label>
            <input
              id="owner"
              class="form-control"
              v-model="search.restaurant"
            /><br />
          </div>
          <div class="col">
            <label for="town"> Ville :</label>
            <input
              id="owner"
              class="form-control"
              v-model="search.town"
            /><br />
          </div>
          <div class="col">
            <label for="type"> Type :</label>
            <input
              id="owner"
              class="form-control"
              v-model="search.type"
            /><br />
          </div>
        </div>
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
        town: "",
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
          restaurant.town.match(this.search.town) &&
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
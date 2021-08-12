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
      <b-sidebar
        id="sidebar-1"
        title="Restaurant"
        bg-variant="dark"
        text-variant="light"
        shadow
      >
        <br />
        <br />
        <div class="container">
          <div class="card" style="background-color: #212529">
            <label for="owner"> Owner :</label><br />
            <div class="col">
              <input
                id="owner"
                class="form-control bg-dark text-light"
                placeholder="The Owner ..."
                v-model="search.owner"
              /><br />
            </div>

            <label for="restaurant"> Restaurant :</label><br />
            <div class="col">
              <input
                id="owner"
                class="form-control bg-dark text-light"
                placeholder="The Restaurant ..."
                v-model="search.restaurant"
              /><br />
            </div>

            <label for="town"> Ville :</label><br />
            <div class="col">
              <b-form-select
                :options="listVillesMAR"
                v-model="search.town"
                id="town"
              />
            </div>
            <!-- <div class="col">
              <input
                id="owner"
                class="form-control bg-dark text-light"
                placeholder="The Town ..."
                v-model="search.town"
              /><br />
            </div> -->

            <label for="type"> Type :</label><br />
            <div class="col">
              <input
                id="owner"
                class="form-control bg-dark text-light"
                placeholder="The Type ..."
                v-model="search.type"
              /><br />
            </div>

            <!-- <SelectVilles
              class="form-control bg-dark text-light"
              :listVillesMAR="listVillesMAR"
              v-model="search.town"
            /> -->
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
      listVillesMAR: [],
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
    // fetching Data from the Json File
    getRestaurantData() {
      axios
        .get("Restaurant.json")
        .then((response) => (this.listRestaurant = response.data))
        .catch((error) => console.log(error));
    },
    // Fetching data of All Lists of Morocco Cities

    getListVilles() {
      axios.get("villesMAR.json").then((response) => {
        this.listVillesMAR.push({
          value: "",
          text: "",
        });
        // Map : boucler sur les elements de response
        response.data.map((res) => {
          // Push : ajout dans la liste pour respecter la norme de select
          this.listVillesMAR.push({
            value: res.ville,
            text: res.ville,
          });
        });
      });
    },
  },

  // au moment de la creation du components
  created() {
    this.getRestaurantData();
    this.getListVilles();
  },
};
</script>
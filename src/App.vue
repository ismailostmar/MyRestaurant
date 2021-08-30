<template>
  <div id="app">
    <div>
      <!-- Button toggle  -->
<b-button v-b-toggle.sidebar-1 variant="light">
        <b-col md="1" class="mb-1">
          <b-icon icon="filter-left" animation="cylon" font-scale="1"></b-icon>
        </b-col>
      </b-button>

      <div class="container">
        <!-- Sidebar  -->
        <b-sidebar
          id="sidebar-1"
          title="Restaurant"
          bg-variant="light"
          text-variant="black"
          no-header-close
          shadow
          width="300px"
          backdrop
          :mobile="mobile"
          :reduce="reduce"
          :delay="expandWithDelay ? 500 : null"
        >
          <br />
          <br />
          <div class="container">
            <div style="background-color: white">
              <label for="restaurant"> Restaurant :</label><br />
              <div class="col">
                <input
                  id="restaurant"
                  class="form-control bg-light text-black"
                  placeholder="The Restaurant ..."
                  v-model="search.restaurant"
                /><br />
              </div>
              <br />
              <label for="town" class="m-1"> Town :</label><br />
              <div class="col">
                <b-form-select
                  class="forSelect p-1 m-1"
                  :options="listVillesMAR"
                  v-model="search.town"
                  id="town"
                />
              </div>

              <label for="type" class="m-1"> Type :</label><br />
              <div class="col">
                <b-form-select
                  class="forSelect p-1 m-1"
                  :options="listTypeRestaurant"
                  v-model="search.type"
                  id="type"
                />
                <br />
              </div>
            </div>
          </div>
        </b-sidebar>
      </div>
      <!-- Sidebar  -->
    </div>

    <div class="container">
      <div class="row">
        <div class="column mb-1 px-2">
          <div class="card indigo text-center z-depth-2">
            <div class="card-body">
              <Maps />
            </div>
          </div>
        </div>
      </div>
      <div class="card tabRes">
        <TableDataRes :listRestaurant="getListRestaurant" />
      </div>
    </div>
  </div>
</template>

<script>
import TableDataRes from "./components/TableDataRes.vue";
import Maps from "./components/Maps.vue";

import axios from "axios";
export default {
  components: {
    TableDataRes,
    Maps,
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
      listTypeRestaurant: [],
      mobile: "hide",
      reduce: false,
      expandWithDelay: true,
    };
  },

  computed: {
    //get the list of restaurant filtred by restaurant name
    getListRestaurant() {
      return this.listRestaurant.filter((restaurant) => {
        return (
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
          text: "All Towns",
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

    getTypeRestaurant() {
      axios.get("typeRestauant.json").then((response) => {
        this.listTypeRestaurant.push({
          value: "",
          text: "All Types",
        });
        // Map : boucler sur les elements de response
        response.data.map((typ) => {
          // Push : ajout dans la liste pour respecter la norme de select
          this.listTypeRestaurant.push({
            value: typ.resType,
            text: typ.resType,
          });
        });
      });
    },
  },

  // au moment de la creation du components on cree la methode Created()
  created() {
    this.getRestaurantData();
    this.getListVilles();
    this.getTypeRestaurant();
  },
};
</script>

<style>

#app {
  background-color: #F9FAFB;
}

@media screen and (max-height: 450px) {
  .sidebar {
    background-color: #F8F9FA;
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
.tabRes {
  height: 500px;
  margin-top: 10px;
}

b-button {
  color: #342b2b;
  border-color: white;
}

.forSelect {
  width: 270px;
}
</style>
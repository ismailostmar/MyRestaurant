<template>
  <div id="map">
    <input type="text" ref="input" />
    <button @click="submit">Add 1 to counter</button>

    <b-modal ref="my-modal" hide-footer title="Restaurant details">
      <div class="d-block text-center">
        <h3>Information about the clicked Restaurant!</h3>
        <p>Restaurant : {{ this.searchedRestaurant.restaurant }}.</p>
        <p>Owner : {{ this.searchedRestaurant.owner }}.</p>
        <p>Town : {{ this.searchedRestaurant.town }}.</p>
        <p>Type : {{ this.searchedRestaurant.type }}.</p>
      </div>
    </b-modal>

    <div class="col">
      <b-row class="m-2">
        <b-col lg="4" class="pb-2">
          <b-button variant="outline-primary" @click="drawMarker"
            >Get Location</b-button
          >
        </b-col>
        <b-col lg="4" class="pb-2">
          <b-button variant="outline-warning" @click="clearMap"
            >Refresh</b-button
          >
        </b-col>
      </b-row>
    </div>
    <div class="map-responsive">
      <GmapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 1270px; height: 400px"
        frameborder="0"
        :options="{
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          scrollwheel: true,
          rotateControl: true,
          fullscreenControl: true,
          disableDefaultUi: true,
        }"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="getCenter(m.position)"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
import tab from "../../public/coordinates.js";
import Restaurants from "../../public/Restaurant.json";

export default {
  name: "Maps",
  data() {
    return {
      //counter: 0,
      markers: [],
      center: { lat: 45.508, lng: -73.587 },
      searchedRestaurant: {},
    };
  },

  mounted() {
    this.geolocate();
  },
  methods: {
    submit() {
      this.showModal();
    },
    // The Navigator Ask me to get my current Position
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    drawMarker() {
      this.markers = tab;
    },
    clearMap() {
      this.markers = [];
    },
    getCenter(position) {
      this.center = position;
      console.log("clicked !");
      console.log(position);
      this.searchByCordinate(position);
      this.searchByName(this.searchedRestaurant.name);
      this.showModal();
    },

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },

    searchByCordinate(position) {
      this.searchedRestaurant = tab.find(
        (restaurant) =>
          restaurant.position.lat === position.lat &&
          restaurant.position.lng === position.lng
      );
    },

    searchByName(name) {
      console.log(name);
      this.searchedRestaurant = Restaurants.find(
        (resto) => resto.restaurant === name
      );
      alert(this.searchedRestaurant);
    },
  },
};
</script>

<style>
#description {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
}

#infowindow-content .title {
  font-weight: bold;
}

#infowindow-content {
  display: none;
}

#map #infowindow-content {
  display: inline;
}

.pac-card {
  margin: 10px 10px 0 0;
  border-radius: 2px 0 0 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  font-family: Roboto;
}

#pac-container {
  padding-bottom: 12px;
  margin-right: 12px;
}

.pac-controls {
  display: inline-block;
  padding: 5px 11px;
}

.pac-controls label {
  font-family: Roboto;
  font-size: 13px;
  font-weight: 300;
}

#pac-input {
  background-color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  margin-left: 12px;
  padding: 0 11px 0 13px;
  text-overflow: ellipsis;
  width: 400px;
}

#pac-input:focus {
  border-color: #4d90fe;
}

#title {
  color: #fff;
  background-color: #4d90fe;
  font-size: 25px;
  font-weight: 500;
  padding: 6px 12px;
}

#target {
  width: 345px;
}
.map-responsive {
  overflow: hidden;
  padding-bottom: 10%;
  position: relative;
  height: 400px;
}
.map-responsive GmapMap {
  left: 0;
  top: 0;
  position: absolute;
}
</style>
<template>
  <div id="map">
      <b-modal ref="mymodal" title="Restaurant details" backdrop>
        <h3>Information about the clicked Restaurant!</h3>
        <b-container>
          <b-col cols="7">
            Restaurant : {{ searchedRestaurant.restaurant }}</b-col
          >
          <b-col cols="7">
            Owner :
            {{ searchedRestaurant.owner }}
          </b-col>
          <b-col cols="7">
            Town :
            {{ searchedRestaurant.town }}
          </b-col>

          <b-col cols="7">
            Type :
            {{ searchedRestaurant.type }}
          </b-col>
        </b-container>
      </b-modal>
    <div class="map-responsive">
      <GmapMap
        :center="center"
        :zoom="2"
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
          disableDefaultUi: false,
        }"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          @click="getCenter(m.position)"
          :zoomOnClick="true"
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
      value: 0,
      markers: [],
      center: { lat: 45.508, lng: -73.587 },
      searchedRestaurant: {},
    };
  },

  mounted() {
    this.geolocate();
    this.drawMarker();
  },
  methods: {

    eventListner(){

    },

    // The Navigator Ask me to get my current Position
    geolocate: function() {
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
    getCenter(position) {
      this.center = position;
      this.searchByCordinate(position);
      this.searchByName(this.searchedRestaurant.name);
      this.showModal();
    },

    showModal() {
      this.$refs["mymodal"].show();
    },
    hideModal() {
      this.$refs["mymodal"].hide();
    },

    searchByCordinate(position) {
      this.searchedRestaurant = tab.find(
        (restaurant) =>
          restaurant.position.lat === position.lat &&
          restaurant.position.lng === position.lng
      );
    },

    searchByName(name) {
      this.searchedRestaurant = Restaurants.find(
        (resto) => resto.restaurant === name
      );
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

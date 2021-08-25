<template>
  <div id="map">
    <button @click="drawMarker">Draw Marker</button>
    <button @click="clearMap">clear Map</button>
    <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 1300px; height: 400px; solid: 2px black"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
const streetLondon = { lat: 33.52238, lng: -7.64298 };
const casablancaShore = { lat: 33.52144, lng: -7.64324 };
const x = { lat: 37.37062, lng: -5.98817 };

export default {
  name: "Maps",
  data() {
    return {
      markers: [],
      center: casablancaShore,
    };
  },
  methods: {
    drawMarker() {
      this.markers = [
        {
          position: streetLondon,
        },
        {
          position: casablancaShore,
        },
        {
          position: x,
        },
      ];
    },
    clearMap() {
      this.markers = [];
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
</style>
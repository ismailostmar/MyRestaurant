<template lang="fr">
    <div class="table-responsive">
        <!--Table-->
<table class="table table-hover table-borderless">

  <!--Table head-->
  <thead class="table-dark">
    <tr>
      <th>#</th>
      <th>Restaurant</th>
      <th>Owner</th>
      <th>Ville</th>
      <th>Type</th>
    </tr>
  </thead>
  <!--Table head-->
 
  <!--Table body-->
  <tbody v-for="restau in listRestaurant">
    <tr>
      <th scope="row">{{restau.id}}</th>
      <td>{{restau.restaurant}}</td>
      <td>{{restau.owner}}</td>
      <td>{{restau.ville}}</td>
      <td>{{restau.type}}</td>
    </tr>
  </tbody> 
  <!--Table body-->

</table>
<!--Table-->
    </div>
</template>

<script>
//Javascript Object Notation
export default {
  name: "TableDataRes",
  props: ["listRestaurant"],
};
</script>
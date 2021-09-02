<template lang="fr">
    <div class="table-responsive">
        <!--Table-->
<table class="table table-striped table-borderless table-sm">

  <!--Table head-->
  <thead class="table-info">
    <tr>
      <th></th>
      <th>Restaurant</th>
      <th>Town</th>
      <th>Type</th>
      <th>Owner</th>
    </tr>
  </thead>
  <!--Table head-->
 
  <!--Table body-->
  <tbody v-for="restau in listRestaurant">
    <tr>
      <th scope="row">{{restau.id}}</th>
      <td> <a href="#"> {{restau.restaurant}} </a></td>
      <td>{{restau.town}}</td>
      <td>{{restau.type}}</td>
      <td>{{restau.owner}}</td>     
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
  props: ["listRestaurant",]
};
</script>

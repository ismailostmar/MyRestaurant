<template>
  <div>
    <b-form-select :options="listVillesMAR"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "SelectVilles",
  props: ["listVillesMAR"],
};
</script>
<template>
  <div class="players-container">
    <h1>Players page coming soon....</h1>
    <SortableLeaderTable></SortableLeaderTable>
  </div>
</template>

<script>
import SortableLeaderTable from '../../components/common/SortableLeaderTable/SortableLeaderTable';
export default {
  name: "Players",
  components: {
    SortableLeaderTable,
  }
}
</script>

<style scoped>
.players-container {
  padding: 20px; 
}

</style>
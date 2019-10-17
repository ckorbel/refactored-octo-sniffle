<template>
  <h1>NFL page</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 
export default {
  name: "NFL",

  methods: {
    ...mapActions(["fetchGamesByWeek"])
  },

  computed: {
    ...mapGetters(['games'])
  }, 

  created() {
    this.fetchGamesByWeek();
  }
}
</script>

<style>

</style>
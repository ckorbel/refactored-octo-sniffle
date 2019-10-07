<template>
  <div class="admin-container">
    <create-game-form></create-game-form>
  </div>
</template>

<script>
import CreateGameForm from './CreateGameForm';
export default {
  name: "Admin",
  components: {
    'create-game-form': CreateGameForm,
  },

  data() {
    return {

    };
  }

}
</script>

<style scoped>
  .admin-container {
    margin: 30px;
    width: 55%;
  }
</style>
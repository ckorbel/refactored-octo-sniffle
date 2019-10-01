<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/historical" class="nav-link" href="#">Historical Trends</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/teams" class="nav-link" href="#">Teams</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/players" class="nav-link" href="#">Players</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/stats" class="nav-link" href="#">Stats</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
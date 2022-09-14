<template>
  <div class="navbar">
  <router-link to="/" class="nav-menu active">Projects</router-link>
  <router-link to="/add-project" class="nav-menu">Add a New Project</router-link>
</div>
<router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(224, 224, 224);
  height: 100vh;
}

.navbar{
  text-align: center;
  padding: 12px;
}

.nav-menu{
  text-decoration: none;
  color: rgb(163, 163, 163);
  margin: 10px;
  font-weight: 600;
}

.active{
  border-bottom : 2px solid mediumseagreen;
}
</style>

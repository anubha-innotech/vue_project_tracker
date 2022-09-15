<template>
<div class="navbar">
    <router-link to="/" class="nav-menu ">Projects</router-link>
    <router-link to="/add-project" class="nav-menu">Add a New Project</router-link>
</div>
<router-view />
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* background-color: rgb(224, 224, 224); */
    background-color: steelblue;
    height: 100vh;
}

.navbar {
    background-color: rgba(0, 0, 0, .2);
    padding: 12px 30px;
    text-align: center;
}

.nav-menu {
    text-decoration: none;
    margin: 15px;
    font-size: 1em;
    color: white;
    font-weight: 600;
}

.nav-menu:hover {
    color: lightgray
}
</style>

<template>
    <div class="navbar">
    <router-link to="/" class="nav-menu ">Projects</router-link>
    <router-link to="/add-project" class="nav-menu">Add a New Project</router-link>
</div>
<router-view />
</template>
<style>
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
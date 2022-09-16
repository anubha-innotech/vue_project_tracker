<template>
<div class="navbar">
    <router-link to="/" class="nav-menu">Projects</router-link>
    <router-link to="/add-project" class="nav-menu">Add a New Project</router-link>
</div>
<router-view />
</template>

<style>
.navbar {
    background-color: rgba(0, 0, 0, .2);
    padding: 15px;
    text-align: center;
}

a.nav-menu {
    text-decoration: none;
    padding: 12px;
    font-size: 1em;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
}

.nav-menu:hover {
    color: lightgray
}

a.router-link-active {
    border-bottom: 3px solid white;
}
</style>

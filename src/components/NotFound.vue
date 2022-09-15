<template>
    <div id="error">
        <p id="error404">404</p>
        <h1>Oops!! Page Not Found</h1>
        <router-link to="/" class="link">Go to Projects Page</router-link>
    </div>
    </template>
    
    <style>
    #error {
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white
    }
    
    #error404 {
        font-size: 7em;
        color: tomato;
        margin: 10px;
    }

    .link{
        text-decoration: none;
        color: lightgray;
        margin-top: 7px;
    }
    </style>
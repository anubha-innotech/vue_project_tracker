<template>
 <div class="sub-navbar">
    <router-link to="/" class="sub-nav-menu">VIEW ALL</router-link>
  <router-link :to="{name:'CompletedProjects'}" class="sub-nav-menu">
        COMPLETED
    </router-link>
  <router-link :to="{name:'OngoingProjects'}" class="sub-nav-menu">
        ONGOING
    </router-link>
<div>
  <ul>
    <li v-for="(element,index) in projects" v-bind:key="index" class="project-box">
      <p class="project-title">{{element.title}}</p>
    <p class="project-detail">{{element.detail}}</p>
    </li>
  </ul>
</div>
project is here
{{projects}}
</div>
 
</template>
<script>

export default {
    name: 'ProjectPage',
    data(){
      return{
        projects : [],
      }
    },
    created(){
      this.projects = JSON.parse(localStorage.getItem('project') || "[]");
      console.log(this.projects);
      console.log(typeof(this.projects));
    }
}
</script>
<style>
  .sub-navbar{
    margin: 10px 50px;
  }

  .sub-nav-menu{
    text-decoration: none;
    font-size: .95em;
    font-weight: 600;
    margin: 10px;
    color: darkgrey;
  }
  
  .project-box{
    list-style: none;
    background-color: white;
    padding: 10px 20px;
    margin: 10px 0px;
  }

  .project-title{
    font-weight: 600;
    font-size: 1.2em;
    margin-bottom: 15px;
  }
  
  .project-detail{
    font-size: 1em;
  }
</style>
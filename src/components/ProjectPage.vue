<template>
<div class="filter-nav">
    <button class="filter" @click="applyFilterViewAll">VIEW ALL</button>
    <button class="filter" @click="applyFilterCompleted">COMPLETED</button>
    <button class="filter" @click="applyFilterOngoing">ONGOING</button>
</div>

<div v-if="projects.length === 0" class="project-box">
    <router-link to="/add-project" class="nav-menu">
        <div class="project-box">
            <p>No project added </p>
            <p>Click to add a new project</p>
        </div>

    </router-link>
</div>
<!-- "VIEW ALL" section: shows all projects   -->

<div v-if="filter.viewAll">
    <ul>
        <li v-for="(element,index) in projects" v-bind:key="index" class="project-box" @click.prevent.self="showDetails(index)" :class="{'green-border-left':element.completed, 'red-border-left' : element.ongoing}">
            <span class="project-title">{{element.title}}</span>
            <span class="icons">
                <!-- delete icon  -->
                <i class="fa-solid fa-trash" :key="index" :id="index" @click="deleteProject(index)"></i>
                <!-- edit icon  -->
                <router-link :to="{name:'AddProject', params: {id:index}}"> <i class="fa-solid fa-pencil"></i></router-link>
                <!-- completed icon  -->
                <i class="fa-solid fa-check greenHover" @click="completedProject(index)" :class="{'green-color': element.completed}"></i>
            </span>
            <p class="project-detail" :key="index" v-if="showDetailsIndex === index">{{element.detail}}</p>
            <!-- </div> -->
        </li>
    </ul>
</div>

<!-- "COMPLETED" section : shows all completed projects  -->

<div v-if="filter.completed">
    <ul>
        <div v-for="(element,index) in projects" v-bind:key="index">
            <div v-if="element.completed === true">
                <li class="project-box" @click.prevent.self="showDetails(index)" :class="{'green-border-left':element.completed, 'red-border-left' : element.ongoing}">
                    <span class="project-title">{{element.title}}</span>
                    <span class="icons">
                        <i class="fa-solid fa-trash" :key="index" :id="index" @click="deleteProject(index)"></i>
                        <i class="fa-solid fa-pencil" @click="editProject(index)"></i>
                        <i class="fa-solid fa-check green" @click="completedProject(index)" :class="{'green-color': element.completed}"></i>
                    </span>
                    <p class="project-detail" :key="index" v-if="showDetailsIndex === index">{{element.detail}}</p>
                </li>
            </div>
        </div>
    </ul>
</div>

<!-- "ONGOING" section : shows all ongoing projects  -->

<div v-if="filter.ongoing">
    <ul>
        <div v-for="(element,index) in projects" v-bind:key="index">
            <div v-if="element.ongoing === true">
                <li class="project-box" @click.prevent.self="showDetails(index)" :class="{'green-border-left':element.completed, 'red-border-left' : element.ongoing}">
                    <span class="project-title">{{element.title}}</span>
                    <span class="icons">
                        <i class="fa-solid fa-trash" :key="index" :id="index" @click="deleteProject(index)"></i>
                        <i class="fa-solid fa-pencil" @click="editProject(index)"></i>
                        <i class="fa-solid fa-check" @click="completedProject(index)" :class="{'green-color': element.completed}"></i>
                    </span>
                    <p class="project-detail" :key="index" v-if="showDetailsIndex === index">{{element.detail}}</p>
                </li>
            </div>
        </div>
    </ul>
</div>
</template>

<script>
export default {
    name: 'ProjectPage',
    data() {
        return {
            projects: [],
            showDetailsIndex: "",
            filter: {
                viewAll: true,
                completed: false,
                ongoing: false,
            }
        }
    },
    methods: {
        applyFilterViewAll() {
            this.filter.viewAll = true;
            this.filter.completed = this.filter.ongoing = false;
        },
        applyFilterCompleted() {
            this.filter.completed = true;
            this.filter.viewAll = this.filter.ongoing = false;
        },
        applyFilterOngoing() {
            this.filter.ongoing = true;
            this.filter.viewAll = this.filter.completed = false;
        },

        showDetails(index) {
            if (this.showDetailsIndex != "") {
                this.showDetailsIndex = index;
            } else {
                this.showDetailsIndex = "";
            }
        },
        deleteProject(index) {
            this.projects.splice(index, 1);
            localStorage.setItem("project", JSON.stringify(this.projects));
        },

        editProject(index) {
            this.editProjectSelected = true
            this.editProjectTitle = this.projects[index].title
        },

        completedProject(index) {
            if (this.projects[index].completed === false) {
                this.projects[index].completed = true;
                this.projects[index].ongoing = false;
            } else {
                this.projects[index].completed = false;
                this.projects[index].ongoing = true;
            }
            localStorage.setItem("project", JSON.stringify(this.projects));
        }
    },
    created() {
        this.projects = JSON.parse(localStorage.getItem('project') || "[]");
        // console.log(typeof (this.projects));
    },
}
</script>

<style>
.filter-nav {
    margin: 10px 50px;
}

.filter {
    text-decoration: none;
    font-size: .95em;
    font-weight: 600;
    margin: 10px;
    background-color: transparent;
    border: none;
    color: white;
}

.filter:hover {
    color: lightgray;
}

.project-box {
    list-style: none;
    background-color: white;
    color: midnightblue;
    padding: 30px 30px;
    margin: 10px 50px;
}

.project-title {
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: 15px;
}

.project-detail {
    font-size: 1.07em;
    margin-top: 10px;
    color: black;

}

.icons {
    float: right;
}

.icons i,
a {
    margin-left: 10px;
    color: rgb(189, 189, 189)
}

.icons i:hover,
a:hover {
    color: midnightblue;
}

.icons i.greenHover:hover {
    color: mediumseagreen
}

i.green-color {
    color: mediumseagreen;
}

.green-border-left {
    border-left: 6px solid mediumseagreen;
}

.red-border-left {
    border-left: 6px solid salmon;
}
</style>

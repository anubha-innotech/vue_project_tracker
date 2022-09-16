<template>
<div id="add-project-container">
    <div class="field">
        <label for="project-title">TITLE</label>
        <input type="text" id="project-title" v-model="title">
    </div>
    <div class="field">
        <label for="project-details">DETAILS</label>
        <textarea name="" id="project-details" cols="30" rows="10" v-model="detail"></textarea>
    </div>
    <button @click="addProject" class="btn" v-if="!this.id" :disabled="title.length === 0 || detail.length === 0">Add Project</button>
    <button @click="updateProject" class="btn" v-if="this.id" :disabled="title.length === 0 || detail.length === 0">Update Project</button>
</div>
</template>

<script>
export default {
    name: 'AddProject',
    props: {
        id: String
    },
    data() {
        return {
            title: "",
            detail: "",
            projects: [],
        };
    },

    methods: {
        addProject() {
                this.projects.push({
                    'title': this.title,
                    'detail': this.detail,
                    'completed': false,
                })
                localStorage.setItem("projects", JSON.stringify(this.projects));
                this.title = "";
                this.detail = "";
                this.$router.push({path:'/'})
        },
        updateProject() {
            this.projects[this.id].title = this.title;
            this.projects[this.id].detail = this.detail;
            localStorage.setItem("projects", JSON.stringify(this.projects));
            this.title = "";
            this.detail = "";
            this.$router.push('/')
        }
    },
    created() {
        this.projects = JSON.parse(localStorage.getItem('projects') || "[]");
        if (this.id) {
            this.title = this.projects[this.id].title;
            this.detail = this.projects[this.id].detail;
        }
    },
}
</script>
   
<style>
#add-project-container {
    margin: 3% 10%;
    padding: 5%;
    background-color: white;
    border-radius: 10px;
}

.field {
    margin-bottom: 20px;
}

label {
    color: rgb(38, 38, 128);
    font-weight: 600;
    display: block;
    margin: 10px;
}

input {
    border: none;
    border-bottom: 1px solid rgb(187, 187, 187);
    width: 100%;
    padding: 10px;
    margin-left: 10px;
    font-size: 1em;
    color: darkslategrey;
    letter-spacing: 2px;
}

input:focus,
textarea:focus {
    outline: none;
}

textarea {
    width: 100%;
    border: 1px solid rgb(187, 187, 187);
    margin-left: 10px;
    padding: 10px;
    font-size: 1.2em;
}

.btn {
    padding: 10px 20px;
    display: block;
    margin: 0 auto;
    background-color: mediumseagreen;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 1em;
    cursor: pointer;
}

:disabled{
    opacity: .6;
    cursor:not-allowed;
}
</style>

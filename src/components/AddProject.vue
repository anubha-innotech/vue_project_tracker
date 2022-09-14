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
<button @click="add_project" class="btn">Add Project</button>
    </div>
</template>
<script>
    export default {
        name: 'AddProject',
        data(){
            return{
                    title:"",
                    detail:"",
                project:[
                ],
                projectTemp : []
            };
        },
        
        methods:{
            add_project(){
                // this.project.titles.push(this.project.title)
                // this.project.details.push(this.project.detail)
                this.project.push({'title': this.title, 'detail' : this.detail})
                // this.project.title = this.title
                // this.project.detail = this.detail
                localStorage.setItem("project",JSON.stringify(this.project))
                // localStorage.setItem("detail",JSON.stringify(this.project.details))
                console.log(this.project);
                this.title = "";
                this.detail = ""
            }
        }, 
        // created(){
        //     console.log(localStorage.getItem('project'));
        //     this.project.push(localStorage.getItem('project'));
        // }
    }
    </script>

    <style>
        #add-project-container{
            margin: 3% 10%;
            padding: 5%;
            background-color: white;
            border-radius: 10px;
        }

        .field{
            margin-bottom: 20px;
        }

        label{
            color: rgb(185, 185, 185);
            font-weight: 600;
            display: block;
            margin: 10px;
        }

        input{
            border: none;
            border-bottom: 1px solid lightgrey;
            width: 100%;
            padding: 10px;
            margin-left: 10px;
            font-size: 1em;
            color: darkslategrey;
        }
        
        input:focus , textarea:focus{
            outline: none;
        }
        
        textarea{
            width: 100%;
            border: 1px solid lightgrey;
            margin-left: 10px;
            padding: 10px;
            font-size: 1.1em;
            color: darkslategrey;
        }

        .btn{
            padding: 10px 20px;
            display: block;
            margin: 0 auto;
            background-color:rgb(70, 204, 159);
            color: white;
            border-radius: 10px;
            border: none;
        }
    </style>
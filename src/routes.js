import { createWebHistory, createRouter } from 'vue-router'
const ProjectPage = () => import('./components/ProjectPage.vue');
const AddProject = () => import('./components/AddProject.vue');
const CompletedProjects = () => import('./components/CompletedProjects.vue');
const OngoingProjects = () => import('./components/OngoingProjects.vue');

const routes = [
    {
        name: 'ProjectPage',
        path: '/',
        component: ProjectPage
    },
    {
        name: 'AddProject',
        path: '/add-project',
        component: AddProject,
    },
    {
        name: 'CompletedProjects',
        path: '/completed-projects',
        component: CompletedProjects,
    },
    {
        name: 'OngoingProjects',
        path: '/ongoing-projects',
        component: OngoingProjects,
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
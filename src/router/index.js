import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
const routes = [{
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: home
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
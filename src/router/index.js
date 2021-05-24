import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import useAxios from '@/views/useAxios'
import useUtil from '@/views/useUtil'
// useUtil
const routes = [{
        path: '/',
        redirect: '/useUtil'
    },
    {
        path: '/useAxios',
        name: 'useAxios',
        component: useAxios,
        meta: {
            title: "Axios样例"
        }
    },
    {
        path: '/useUtil',
        name: 'useUtil',
        component: useUtil,
        meta: {
            title: "JS 页面的常用工具类样例"
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
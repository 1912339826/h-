import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import useAxios from '@/views/useAxios'
import useUtil from '@/views/useUtil'
import theme from '@/views/theme'
import useToast from '@/views/useToast'
import catchPage from '@/views/catch/index.vue'
import Image from "@/views/Image"
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
    },
    {
        path: '/theme',
        name: 'theme',
        component: theme,
        meta: {
            title: "vant主题定制"
        }
    },
    {
        path: '/useToast',
        name: 'useToast',
        component: useToast,
        meta: {
            title: "Toast"
        }
    },
    {
        path: '/Image',
        name: 'Image',
        component: Image,
        meta: {
            title: "Image"
        }
    },
    {
        path: '/catch',
        name: 'catch',
        component: catchPage,
        meta: {
            title: "catch"
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
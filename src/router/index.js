import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import VueBox from '@/views/box'
import useAxios from '@/views/useAxios'
import useUtil from '@/views/useUtil'
import theme from '@/views/theme'
import useToast from '@/views/useToast'
import catchPage from '@/views/catch/index.vue'
import Image from "@/views/Image"
import calendar from '@/views/calendar/index.vue'
import formDome from '@/views/formDome/index.vue'
// useUtil
const routes = [{
        path: '/',
        redirect: '/VueBox/formDome'
    },
    {
        path: '/VueBox',
        component: VueBox,
        meta: {
            title: "VueBox",
            icon: ""
        },
        children: [{
                path: '/VueBox/useAxios',
                name: 'VueBoxUseAxios',
                component: useAxios,
                meta: {
                    title: "Axios样例",
                    icon: ""
                }
            },
            {
                path: '/VueBox/useUtil',
                name: 'VueBoxUseUtil',
                component: useUtil,
                meta: {
                    title: "JS 页面的常用工具类样例",
                    icon: ""
                }
            },
            {
                path: '/VueBox/theme',
                name: 'VueBoxTheme',
                component: theme,
                meta: {
                    title: "vant主题定制",
                    icon: ""
                }
            },
            {
                path: '/VueBox/useToast',
                name: 'VueBoxUseToast',
                component: useToast,
                meta: {
                    title: "Toast",
                    icon: ""
                }
            },
            {
                path: '/VueBox/Image',
                name: 'VueBoxImage',
                component: Image,
                meta: {
                    title: "Image",
                    icon: ""
                }
            },
            {
                path: '/VueBox/catch',
                name: 'VueBoxCatch',
                component: catchPage,
                meta: {
                    title: "catch",
                    icon: ""
                }
            },
            {
                path: '/VueBox/calendar',
                name: 'VueBoxCalendar',
                component: calendar,
                meta: {
                    title: "calendar",
                    icon: ""
                }
            },
            {
                path: '/VueBox/formDome',
                name: 'VueBoxFormDome',
                component: formDome,
                meta: {
                    title: "formDome",
                    icon: ""
                }
            }
        ]
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
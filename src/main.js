import {
    createApp,
} from 'vue'
import App from './App.vue'
import router from '@/router/index'
import 'normalize.css/normalize.css'
import vant from 'vant';
import {
    Lazyload
} from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/index.less';
import '@/assets/index.less';
import h from '@/components/h-'
const app = createApp(App)
for (let index = 0; index < h.length; index++) { //批量的全局组件注册
    const element = h[index];
    app.component(element.tag, element.name)
}
let LazyloadObj = {
    lazyComponent: true,
}

app.use(vant).use(Lazyload, LazyloadObj).use(router).mount('#app')
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    if (to.meta.content) {
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});
import {
    createApp,
} from 'vue'
import App from './App.vue'
import router from '@/router/index'
import 'normalize.css/normalize.css'
import vant from 'vant';
import 'vant/lib/index.css';
import h from '@/components/h-'
const app = createApp(App)
for (let index = 0; index < h.length; index++) { //批量的全局组件注册
    const element = h[index];
    app.component(element.tag, element.name)
}
app.use(vant).use(router).mount('#app')
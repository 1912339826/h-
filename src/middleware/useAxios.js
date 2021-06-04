/**
 * @overview 关于Axios封装的中间件
 */
// import {
//     ref
// } from "vue";
import {
    useRouter
} from "vue-router";
import {
    singleReq,
    // multipleReq//暂时null
} from '@/utils/request.js'
import api from '@/api/index.js'
export default function () {
    const router = useRouter();
    /**
     * @param name  //api
     * @param data  //一般参数
     * */
    function useAxiosAPISingle(name, data) {
        let res = singleReq(api[name], data).catch((err) => {
            console.log(err.status, '11111111')
            //  401登录  402... 404返回 500刷新 
            if (err.status === 401) {
                return '去登录'
            }
            router.push({
                name: "catch",
                query: {
                    message: JSON.stringify(err)
                }
            })
        })
        return res
    }
    return {
        useAxiosAPISingle
    }
}
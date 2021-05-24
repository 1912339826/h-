// 关于Axios封装的中间件
// import {
//     ref
// } from "vue";
import {
    singleReq,
    // multipleReq//暂时null
} from '@/utils/request.js'
import api from '@/api/index.js'
export default function () {
    /**
     * @param name  //api
     * @param data  //一般参数
     * */
    function useAxiosAPISingle(name, data) {
        let res = singleReq(api[name], data)
        return res
    }
    return {
        useAxiosAPISingle
    }
}
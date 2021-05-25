import * as util from "@/utils/util.js";
// 关于JS 页面的常用工具类的中间件
export default function () {
    function UseUtilFindTheCurrentDictionary() {
        return {
            isEmail: {
                todo: "邮箱"
            },
            isMobile: {
                todo: "手机号码"
            },
            isPhone: {
                todo: "电话号码"
            },
            isURL: {
                todo: "URL地址"
            },
            isString: {
                todo: "是否字符串"
            },
            isNumber: {
                todo: "是否数字"
            },
            isBoolean: {
                todo: "是否boolean"
            },
            isFunction: {
                todo: "是否函数"
            },
            isNull: {
                todo: "是否为null"
            },
            isUndefined: {
                todo: "是否undefined"
            },
            isObj: {
                todo: "是否对象"
            },
            isArray: {
                todo: "是否数组"
            },
            isDate: {
                todo: "是否时间"
            },
            isRegExp: {
                todo: "是否正则"
            },
            isError: {
                todo: "是否错误对象"
            },
            isSymbol: {
                todo: "是否Symbol函数"
            },
            isPromise: {
                todo: "是否Promise对象"
            },
            isSet: {
                todo: "是否Set对象"
            },
            isWeiXin: {
                todo: "是否是微信浏览器"
            },
            isDeviceMobile: {
                todo: "是否是移动端"
            },
            isQQBrowser: {
                todo: "是否是QQ浏览器"
            },
            isSpider: {
                todo: "是否是爬虫"
            },
            isSet: {
                todo: "是否Set对象"
            },
            isSet: {
                todo: "是否Set对象"
            }
        }
    }
    return {
        ...util,
        UseUtilFindTheCurrentDictionary
    }
}
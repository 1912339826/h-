import util from "@/utils/toolkit/index.js";
/**
 * @overview 关于JS 页面的常用工具类的中间件
 * @returns 
 */
import {
    readonly
} from 'vue'
export default function () {
    // 仅供查阅使用...
    const UseUtilFindTheCurrentDictionary = readonly({
        array: {
            todo: 'JS 数组的处理',
            Function: {
                contains: {
                    todo: "判断一个元素是否在数组中"
                },
                each: {
                    todo: "each"
                },
                map: {
                    todo: "map"
                },
                sort: {
                    todo: "排序"
                },
                unique: {
                    todo: "去重"
                },
                union: {
                    todo: "求两个集合的并集"
                },
                intersect: {
                    todo: "求两个集合的交集"
                },
                remove: {
                    todo: "删除其中一个元素"
                },
                formArray: {
                    todo: "将类数组转换为数组的方法"
                },
                max: {
                    todo: "最大值"
                },
                min: {
                    todo: "最小值"
                },
                sum: {
                    todo: "求和"
                },
                average: {
                    todo: "平均值"
                },
                getArrRepeat: {
                    todo: "判断a数组是否包含b数组中"
                },
                arrChunk: {
                    todo: "将数组分片"
                },
                shuffle: {
                    todo: "洗牌算法随机"
                },
            },
        },

        dataType: {
            todo: 'JS 数据类型的判断',
            Function: {
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
            }
        },

        element: {
            todo: 'JS dom元素的处理',
            Function: {
                hasClass: {
                    todo: "el是否包含某个class"
                },
                addClass: {
                    todo: "el添加某个class"
                },
                removeClass: {
                    todo: "el去除某个class"
                },
                getScrollPosition: {
                    todo: "获取滚动的坐标"
                },
                scrollToTop: {
                    todo: "滚动到顶部"
                },
                elementIsVisibleInViewport: {
                    todo: "el是否在视口范围内"
                },
                removeHtmltag: {
                    todo: "去除html标签"
                }
            }
        },

        environmentalType: {
            todo: 'JS 运行环境的检测',
            Function: {
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
                isIos: {
                    todo: "是否ios"
                },
                isPC: {
                    todo: "是否为PC端"
                }
            }
        },

        number: {
            todo: 'JS 数子的处理',
            Function: {
                random: {
                    todo: "随机数范围"
                },
                numberToChinese: {
                    todo: "将阿拉伯数字翻译成中文的大写数字"
                },
                changeToChinese: {
                    todo: "将数字转换为大写金额"
                }
            }
        },

        other: {
            todo: 'JS 其他',
            Function: {
                getQueryString: {
                    todo: "获取url参数"
                },
                injectScript: {
                    todo: "动态引入js"
                },
                download: {
                    todo: "根据url地址下载"
                },
                copyTextToClipboard: {
                    todo: "劫持粘贴板"
                },
                checkPwd: {
                    todo: "检测密码强度"
                },
                debouncer: {
                    todo: "函数节流器"
                },
                isObjectEqual: {
                    todo: "判断两个对象是否键值相同"
                },
                colorToRGB: {
                    todo: "16进制颜色转RGB或者RGBA字符串"
                },
                appendQuery: {
                    todo: "追加url参数"
                },

                maxDayOfDate: {
                    todo: "取得当前日期所在月的最大天数"
                }
            }
        },

        string: {
            todo: 'JS 字符串的处理',
            Function: {
                trim: {
                    todo: "去除空格"
                },
                changeCase: {
                    todo: "1:首字母大写  2：首字母小写  3：大小写转换  4：全部大写  5：全部小写"
                },
                insertStr: {
                    todo: "在字符串中插入新字符串"
                },
            }
        },

        verify: {
            todo: 'JS 验证',
            Function: {
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
                checkStr: {
                    todo: "判断类型集合"
                },
                isCardID: {
                    todo: "严格的身份证校验"
                },
                isPassport: {
                    todo: "护照验证"
                },
                isHKMacao: {
                    todo: "港澳通行证验证"
                },
                isTaiwan: {
                    todo: "台湾地区身份证校验"
                },
            }
        }
    })

    return {
        util,
        UseUtilFindTheCurrentDictionary
    }
}
/**
 * @overview JS 页面的常用工具类
 * {@link https://www.cnblogs.com/LMJBlogs/p/6024148.html js中arguments的用法}
 */

/**
 * @todo 邮箱
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 * @param {*} s
 */
export const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * @todo 手机号码
 * @param {*} s
 */
export const isMobile = (s) => {
    return /^1[0-9]{10}$/.test(s)
}

/**
 * @todo 电话号码
 * @param {*} s
 */
export const isPhone = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * @param {*} s
 * @todo URL地址
 */
export const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
}

/**
 * @param {*} o
 * @todo 是否字符串
 */
export const isString = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

/**
 * @param {*} o
 * @todo 是否数字
 */
export const isNumber = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

/**
 * @param {*} o
 * @todo 是否boolean
 */
export const isBoolean = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * @param {*} o
 * @todo 是否函数
 */
export const isFunction = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * @param {*} o
 * @todo 是否为null
 */
export const isNull = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * @param {*} o
 * @todo 是否undefined
 */
export const isUndefined = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * @param {*} o
 * @todo 是否对象
 */
export const isObj = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

/**
 * @param {*} o
 * @todo 是否数组
 */
export const isArray = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/**
 * @param {*} o
 * @todo 是否时间
 */
export const isDate = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * @param {*} o
 * @todo 是否正则
 */
export const isRegExp = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * @param {*} o
 * @todo 是否错误对象
 */
export const isError = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * @param {*} o
 * @todo 是否Symbol函数
 */
export const isSymbol = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * @param {*} o
 * @todo 是否Promise对象
 */
export const isPromise = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/**
 * @param {*} o
 * @todo 是否Set对象
 */
export const isSet = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

export const ua = navigator.userAgent.toLowerCase();

/**
 * @todo 是否是微信浏览器
 */
export const isWeiXin = () => {
    return ua.match(/microMessenger/i) == 'micromessenger'
}

/**
 * @todo 是否是移动端
 */
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

/**
 * @todo  是否是QQ浏览器
 */
export const isQQBrowser = () => {
    return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}


/**
 * @todo 是否是爬虫
 */
export const isSpider = () => {
    return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}


/**
 * 是否ios
 */
export const isIos = () => {
    let u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
        return false
    } else if (u.indexOf('iPhone') > -1) { //苹果手机
        return true
    } else if (u.indexOf('iPad') > -1) { //iPad
        return false
    } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
        return false
    } else {
        return false
    }
}

/**
 * 是否为PC端
 */
export const isPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}



/**
 * 去除html标签
 * @param {*} str 
 */
export const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}

/**
 * 获取url参数
 * @param {*} name 
 */
export const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = window.location.search.split('?')[1] || '';
    const r = search.match(reg) || [];
    return r[2];
}


/**
 * 动态引入js
 * @param {*} src 
 */
export const injectScript = (src) => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    const t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}

/**
 * 根据url地址下载
 * @param {*} url 
 */
export const download = (url) => {
    let isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    let isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        let link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            let fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            let e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}

/**
 * el是否包含某个class
 * @param {*} el 
 * @param {*} className 
 */
export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

/**
 * el添加某个class
 * @param {*} el 
 * @param {*} className 
 */
export const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

/**
 * el去除某个class
 * @param {*} el 
 * @param {*} className 
 */
export const removeClass = (el, className) => {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

/**
 * 获取滚动的坐标
 * @param {*} el 
 */
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/**
 * 滚动到顶部
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

/**
 * el是否在视口范围内
 * @param {*} el 
 * @param {*} partiallyVisible 
 */
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const {
        top,
        left,
        bottom,
        right
    } = el.getBoundingClientRect();
    const {
        innerHeight,
        innerWidth
    } = window;
    return partiallyVisible ?
        ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
        top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

/**
 * 洗牌算法随机
 * @param {*} arr 
 */
export const shuffle = (arr) => {
    let result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

/**
 * 劫持粘贴板
 * @param {*} value 
 */
export const copyTextToClipboard = (value) => {
    let textArea = document.createElement("textarea");
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        // let successful = document.execCommand('copy');
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}


/**
 * 判断类型集合
 * @param {*} str 
 * @param {*} type 
 */
export const checkStr = (str, type) => {
    switch (type) {
        case 'phone': //手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        case 'tel': //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card': //身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal': //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ': //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email': //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money': //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL': //网址
            return /(http|ftp|https):\/\/[\w\-_]+([\w\-_]+)+([w,@?^=%&:/~#]*[\w?^=%&/~])?/.test(str)
        case 'IP': //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date': //日期时间
            return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
        case 'number': //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\\u4E00-\\u9FA5]+$/.test(str);
        case 'lower': //小写
            return /^[a-z]+$/.test(str);
        case 'upper': //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML': //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
}

/**
 *  @todo 严格的身份证校验
 *  @param {string} num 
 *  @tutorial https://blog.csdn.net/haibo5240/article/details/89022595
 */
export function isCardID(num) {
    //num数据类型为字符串 
    num = num.toUpperCase();
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
        return false;
    }
    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    //下面分别分析出生日期和校验位
    let len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        let arrSplit = num.match(re);

        //检查生日日期是否正确
        let dtmBirth = new Date(
            "19" + arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
        );
        let bCorrectDay;
        bCorrectDay =
            dtmBirth.getYear() == Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 == Number(arrSplit[3]) &&
            dtmBirth.getDate() == Number(arrSplit[4]);
        if (!bCorrectDay) {
            return false;
        } else {
            //将15位身份证转成18位
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            let arrInt = new Array(
                7,
                9,
                10,
                5,
                8,
                4,
                2,
                1,
                6,
                3,
                7,
                9,
                10,
                5,
                8,
                4,
                2
            );
            let arrCh = new Array(
                "1",
                "0",
                "X",
                "9",
                "8",
                "7",
                "6",
                "5",
                "4",
                "3",
                "2"
            );
            let nTemp = 0,
                i;
            num = num.substr(0, 6) + "19" + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        let arrSplit = num.match(re);

        //检查生日日期是否正确
        let dtmBirth = new Date(
            arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]
        );
        let bCorrectDay;
        bCorrectDay =
            dtmBirth.getFullYear() == Number(arrSplit[2]) &&
            dtmBirth.getMonth() + 1 == Number(arrSplit[3]) &&
            dtmBirth.getDate() == Number(arrSplit[4]);
        if (!bCorrectDay) {
            return false;
        } else {
            //检验18位身份证的校验码是否正确。
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            let valnum;
            let arrInt = new Array(
                7,
                9,
                10,
                5,
                8,
                4,
                2,
                1,
                6,
                3,
                7,
                9,
                10,
                5,
                8,
                4,
                2
            );
            let arrCh = new Array(
                "1",
                "0",
                "X",
                "9",
                "8",
                "7",
                "6",
                "5",
                "4",
                "3",
                "2"
            );
            let nTemp = 0,
                i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
                return false;
            }
            return true;
        }
    }
    return false;
}

/**
 *  @todo 护照验证 
 *  @tutorial https://www.jb51.cc/regex/488106.html
 *  @param {string} cardNum
 *  @returns {boolean} true or false
 */
export function isPassport(cardNum) {
    let re1 = /^[\S\n\s]{8,10}$/
    let arrSplit = re1.test(cardNum);
    return arrSplit
}

/**
 * @todo 港澳通行证验证
 * @param {string} cardNum 
 * @tutorial https://www.jb51.cc/regex/488106.html
 * @returns {boolean} true or false
 */
export function isHKMacao(cardNum) {
    let re = /^[\S\n\s]{8,11}$/
    let arrSplit = re.test(cardNum);
    return arrSplit
}

/**
 * @todo 台湾地区身份证校验
 * @param {string} idcard 
 * @returns {boolean} true or false
 */
export function isTaiwan(idcard) {
    if (/^[A-Z][1-2]\d{8}$/.test(idcard)) {
        var area = {
            'A': 10,
            'B': 11,
            'C': 12,
            'D': 13,
            'E': 14,
            'F': 15,
            'G': 16,
            'H': 17,
            'J': 18,
            'K': 19,
            'L': 20,
            'M': 21,
            'N': 22,
            'P': 23,
            'Q': 24,
            'R': 25,
            'S': 26,
            'T': 27,
            'U': 28,
            'V': 29,
            'X': 30,
            'Y': 31,
            'W': 32,
            'Z': 33,
            'I': 34,
            'O': 35
        };
        var idcard_array = new Array();

        idcard_array = idcard.split("");

        var jym = parseInt(area[idcard_array[0]] / 10) + 9 * (area[idcard_array[0]] % 10) + 8 * idcard_array[1] + 7 * idcard_array[2] + 6 * idcard_array[3] + 5 * idcard_array[4] + 4 * idcard_array[5] + 3 * idcard_array[6] + 2 * idcard_array[7] + 1 * idcard_array[8];

        jym = (10 - jym % 10) % 10;

        if (idcard_array[9] == jym) {
            return true;
        }
        return false
    } else {
        let re1 = /^[\S\n\s]{8,18}$/
        let arrSplit = re1.test(idcard);
        //   // return arrSplit
        return arrSplit
    }
}


/********************************************* 数字转换 ******************************/


/**
 * 随机数范围
 */
export function random(min, max) {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null;
    }

}

/**
 * 将阿拉伯数字翻译成中文的大写数字
 */
export const numberToChinese = (num) => {
    let AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
    let BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    let a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (let i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                    .test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
            re = AA[0] + re;
        if (a[0].charAt(i) != 0)
            re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }

    if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
        re += BB[6];
        for (let i = 0; i < a[1].length; i++)
            re += AA[a[1].charAt(i)];
    }
    if (re == '一十')
        re = "十";
    if (re.match(/^一/) && re.length == 3)
        re = re.replace("一", "");
    return re;
}

/**
 * 将数字转换为大写金额
 */
export const changeToChinese = (Num) => {
    let i;
    let tmpnewchar = ""
    let perchar;
    //判断如果传递进来的不是字符的话转换为字符
    if (typeof Num == "number") {
        Num = new String(Num);
    }
    Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
    Num = Num.replace(/ /g, "") //替换tomoney()中的空格
    Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return "";
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    let part = String(Num).split(".");
    let newchar = "";
    //小数点前进行转化
    for (i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            return "";
            //若数量超过拾亿单位，提示
        }
        perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":
                tmpnewchar = "零" + tmpnewchar;
                break;
            case "1":
                tmpnewchar = "壹" + tmpnewchar;
                break;
            case "2":
                tmpnewchar = "贰" + tmpnewchar;
                break;
            case "3":
                tmpnewchar = "叁" + tmpnewchar;
                break;
            case "4":
                tmpnewchar = "肆" + tmpnewchar;
                break;
            case "5":
                tmpnewchar = "伍" + tmpnewchar;
                break;
            case "6":
                tmpnewchar = "陆" + tmpnewchar;
                break;
            case "7":
                tmpnewchar = "柒" + tmpnewchar;
                break;
            case "8":
                tmpnewchar = "捌" + tmpnewchar;
                break;
            case "9":
                tmpnewchar = "玖" + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + "元";
                break;
            case 1:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 2:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 3:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 4:
                tmpnewchar = tmpnewchar + "万";
                break;
            case 5:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 6:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 7:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 8:
                tmpnewchar = tmpnewchar + "亿";
                break;
            case 9:
                tmpnewchar = tmpnewchar + "拾";
                break;
        }
        let newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf(".") != -1) {
        if (part[1].length > 2) {
            // alert("小数点之后只能保留两位,系统将自动截断");
            part[1] = part[1].substr(0, 2)
        }
        for (i = 0; i < part[1].length; i++) {
            tmpnewchar = ""
            perchar = part[1].charAt(i)
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            if (i == 0) tmpnewchar = tmpnewchar + "角";
            if (i == 1) tmpnewchar = tmpnewchar + "分";
            newchar = newchar + tmpnewchar;
        }
    }
    //替换所有无用汉字
    while (newchar.search("零零") != -1)
        newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) == "元") {
        newchar = newchar + "整"
    }
    return newchar;
}



/********************************************* 关于数组 ******************************/

/**
 * 判断一个元素是否在数组中
 */
export const contains = (arr, val) => {
    return arr.indexOf(val) != -1 ? true : false;
}


/**
 * @param  {arr} 数组
 * @param  {fn} 回调函数
 * @return {undefined}
 */
export function each(arr, fn) {
    fn = fn || Function;
    let a = [];
    let args = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < arr.length; i++) {
        let res = fn.apply(arr, [arr[i], i].concat(args));
        if (res != null) a.push(res);
    }
}

/**
 * @param  {arr} 数组
 * @param  {fn} 回调函数
 * @param  {thisObj} this指向
 * @return {Array} 
 */
export const map = (arr, fn, thisObj) => {
    let scope = thisObj || window;
    let a = [];
    for (let i = 0, j = arr.length; i < j; ++i) {
        let res = fn.call(scope, arr[i], i, this);
        if (res != null) a.push(res);
    }
    return a;
}


/**
 * @param  {arr} 数组
 * @param  {type} 1：从小到大   2：从大到小   3：随机
 * @return {Array}
 */
export const sort = (arr, type = 1) => {
    return arr.sort((a, b) => {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    })
}

/**
 * 去重
 */
export const unique = (arr) => {
    if (Array.prototype.hasOwnProperty.call('from')) {
        return Array.from(new Set(arr));
    } else {
        let n = {},
            r = [];
        for (let i = 0; i < arr.length; i++) {
            if (!n[arr[i]]) {
                n[arr[i]] = true;
                r.push(arr[i]);
            }
        }
        return r;
    }
}


/**
 * 求两个集合的并集
 */
export const union = (a, b) => {
    let newArr = a.concat(b);
    return this.unique(newArr);
}

/**
 * 求两个集合的交集
 */
export const intersect = (a, b) => {
    let _this = this;
    a = this.unique(a);
    return this.map(a, function (o) {
        return _this.contains(b, o) ? o : null;
    });
}

/**
 * 删除其中一个元素
 */
export const remove = (arr, ele) => {
    let index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

/**
 * 将类数组转换为数组的方法
 */
export const formArray = (ary) => {
    let arr = [];
    if (Array.isArray(ary)) {
        arr = ary;
    } else {
        arr = Array.prototype.slice.call(ary);
    }
    return arr;
}

/**
 * 最大值
 */
export const max = (arr) => {
    return Math.max.apply(null, arr);
}

/**
 * 最小值
 */
export const min = (arr) => {
    return Math.min.apply(null, arr);
}

/**
 * 求和
 */
export const sum = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
}

/**
 * 平均值
 */
export const average = (arr) => {
    return this.sum(arr) / arr.length
}



/********************************************* String 字符串操作 ******************************/


/**
 * 去除空格
 * @param  {str}
 * @param  {type} 
 * type:  1-所有空格  2-前后空格  3-前空格 4-后空格
 * @return {String}
 */
export const trim = (str, type) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

/**
 * @param  {str} 
 * @param  {type}
 *       type:  1:首字母大写  2：首字母小写  3：大小写转换  4：全部大写  5：全部小写
 * @return {String}
 */
export const changeCase = (str, type) => {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}


/*
 *  检测密码强度
 */
export const checkPwd = (str) => {
    let Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
}

/**
 * 函数节流器
 * @param  {Function} fn 需要执行性的函数
 * @param  {number} time 时间戳
 * @param  {number} interval 间隔时间
 */
export const debouncer = (fn, time, interval = 200) => {
    if (time - (window.debounceTimestamp || 0) > interval) {
        fn && fn();
        window.debounceTimestamp = time;
    }
}

/**
 * 在字符串中插入新字符串
 * @param {string} soure 源字符
 * @param {string} index 插入字符的位置
 * @param {string} newStr 需要插入的字符
 * @returns {string} 返回新生成的字符
 */
export const insertStr = (soure, index, newStr) => {
    let str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}

/**
 * 判断两个对象是否键值相同
 * @param  {Object}  a 第一个对象
 * @param  {Object}  b 第一个对象
 * @return {Boolean}   相同返回true，否则返回false
 */
export const isObjectEqual = (a, b) => {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

/**
 * 16进制颜色转RGB\RGBA字符串
 * @param  {String} val 16进制颜色值
 * @param  {Number} opa 不透明度，取值0~1
 * @return {String}     转换后的RGB或RGBA颜色值
 */
export const colorToRGB = (val, opa) => {

    let pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
    let isOpa = typeof opa == 'number'; //判断是否有设置不透明度

    if (!pattern.test(val)) { //如果值不符合规则返回空字符
        return '';
    }

    let v = val.replace(/#/, ''); //如果有#号先去除#号
    let rgbArr = [];
    let rgbStr = '';

    for (let i = 0; i < 3; i++) {
        let item = v.substring(i * 2, i * 2 + 2);
        let num = parseInt(item, 16);
        rgbArr.push(num);
    }

    rgbStr = rgbArr.join();
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
    return rgbStr;
}

import QueryParam from './QueryParam.js'
/**
 * 追加url参数
 * @param {string} url url参数
 * @param {string|object} key 名字或者对象
 * @param {string} value 值
 * @return {string} 返回新的url
 * @example
 * appendQuery('lechebang.com', 'id', 3);
 * appendQuery('lechebang.com?key=value', { cityId: 2, cityName: '北京'});
 */
export const appendQuery = (url, key, value) => {
    let options = key;
    if (typeof options == 'string') {
        options = {};
        options[key] = value;
    }
    // options = $.param(options);
    options = QueryParam(options);
    if (url.includes('?')) {
        url += '&' + options
    } else {
        url += '?' + options
    }
    return url;
}


/**
 * 判断a数组是否包含b数组中
 */
export const getArrRepeat = (arr1, arr2) => {
    return arr1.filter((item) => {
        return arr2.includes(item)
    })
}



/**
 * 将数组分片
 * 列子[1,2,3,4,5,6,7,8] [[1,2,3],[4,5,6],[7,8]]
 */
export const arrChunk = (data = [], space = 5) => {
    let result = [];
    for (let i = 0, len = data.length; i < len; i += space) {
        result.push(data.slice(i, i + space));
    }
    return {
        data: result,
        total: data.length,
        space
    };
}

/**
 * 取得当前日期所在月的最大天数
 *  @param {Date} date 值
 */

export function maxDayOfDate(date) {
    date = arguments[0] || new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    let time = date.getTime() - 24 * 60 * 60 * 1000;
    let newDate = new Date(time);
    return newDate.getDate();
}
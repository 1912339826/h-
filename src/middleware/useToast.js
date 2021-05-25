import {
    Toast
} from "vant";

export default function () {
    Toast.setDefaultOptions({
        duration: 0
    });

    Toast.allowMultiple();

    /**
     * @todo 设置Toast
     * @param {string|object} content 填充的内容
     * @param {string} type 插入字符的位置
     * @tutorial https://www.cnblogs.com/decode1234/p/11085003.html
     */

    function setToast(content, type) {
        if (arguments.length == 1) {
            Toast(content)
        } else if (arguments.length == 2) {
            Toast[type](content)
        }
    }

    /**
     * 
     * @todo 关闭提示
     */

    function clearToast() {
        Toast.clear()
    }

    // function setToasts(content, type) {

    // }

    return {
        setToast,
        clearToast,
        // setToasts
    }
}
import {
    Toast
} from "vant";
// (未完成)
export default function () {
    Toast.setDefaultOptions({
        duration: 2000//ms,停留时间,值为0时,不自动消失.
    });

    Toast.allowMultiple();

    /**
     * @todo 设置Toast
     * @param {string|object} content 填充的内容
     * @param {string} type 插入字符的位置
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
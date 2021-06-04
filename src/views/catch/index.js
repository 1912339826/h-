/**
 * @param {Number|String} active Number: 0.刷新 -1.返回  string: 为指向对应界面的name
 * @param {String} message 页面显示信息,一般为接口返回消息提示.
 * @param {String} buttonText 按钮文字填充
 */
export const stateArray = {
    404: {
        active: -1,
        message: "页面不见了",
        buttonText: "返回",
        image: "https://img01.yzcdn.cn/vant/custom-empty-image.png"
    },
};
// import {
//     Toast
// } from "vant";

export const pattern = /\d{6}/;
// 校验函数返回 true 表示校验通过，false 表示不通过
export const validator = (val) => /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(val);
// 校验函数可以直接返回一段错误提示
export const validatorMessage = /\d{6}/;
// 校验函数可以返回 Promise，实现异步校验
export const asyncValidator = (val) => /\d{6}/.test(val)
export const formList = {
    pattern: {
        model: "",
        name: "pattern",
        placeholder: "正则校验",
        Toast: "",
        rules: [{
            pattern,
            message: '请输入正确内容'
        }],
        submit: true
    },
    validator: {
        model: "15105204102",
        name: "validator",
        placeholder: "函数校验",
        Toast: "",
        rules: [{
            validator,
            message: '请输入正确内容'
        }],
        submit: true
    },
    validatorMessage: {
        model: "",
        name: "validatorMessage",
        placeholder: "112121",
        Toast: "",
        rules: [{
            required: true,
            message: '请填写'
        }],
        submit: true
    },
    asyncValidator: {
        model: "",
        name: "asyncValidator",
        placeholder: "异步函数校验",
        Toast: "",
        rules: [{
            asyncValidator,
            message: '请输入正确内容'
        }],
        submit: true
    }
}

export const submitForm = ["pattern", "validator"]
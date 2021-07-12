//范例
export const obj = {
    label: "地区",
    model: {
        Display: "",
        submit: ""
    },
    initializedHidden: true,
    name: "cityId",
    placeholder: "请选择下属单位",
    readonly: true,
    toast: "",
    // toPickPageFormPageName: "",
    gotoSelectPage: "",
    // openFormRefName: {
    openRef: {
        type: "Picker",
        name: "PickerName"
    }, //ref type类型 name名称 
    required: true,
    rules: [{
        required: true,
        message: '请输入正确内容'
    }]
}

/**
 * @todo 需要提交的项
 */
export const submitFormValue = [];
/**
 * @todo 此列只适用于add操作
 * @param {String} label 此项 输入框左侧文本(必填)
 * @param {Object} model Display:类name(用来显示的),submit:类id(用来提交的)(必填)
 * @param {Boolean} initializedHidden 是否初始化隐藏(必填)
 * @param {String} name 此项name,与此项key值相等(必填),也为提交key
 * @param {String} placeholder 输入框占位提示文字(必填)
 * @param {Boolean} readonly 是否为只读状态(是否通过选择等非直接输入的方式获取值 )
 * @param {String} toast vant组件 Toast 提示(页面需要,但没填写时取此项placeholder值)
 * @param {Object} beAssociatedWith 此项所关联的项
 * @param {Object} precondition 前提条件
 * @param {Array} after 此项修改时,所要清除的项
 * @param {Array} before 此项填写时,前置必填的项
 * @param {String} toPickPageFormPageName  需要跳转页面(<=name)进行选择操作(单选/多选/地图等页面)
 * @param {String} openFormRefName 需要打开当前页面的Picker弹框(<=组件ref值名称)进行选择操作
 * @param {Array} ShowHiddenTriggerFormValue 此项修改时, 清除并且隐藏(不提交)的项
 * @param {String} type 同 vant type 输入框类型, 可选值为 tel digit number textarea password 等(默认值为text)
 * @param {Boolean} required 是否显示表单必填星号即是否必填
 * @param {String} leftIcon 左侧图标名称或图片链接
 * @param {String} rightIcon 右侧图标名称或图片链接
 * @param {String} autocomplete input 标签原生的自动完成属性 (默认推荐值:off,以便于测试)
 * @param {Boolean} unContainSpaces 内容是否不可以含有空格
 * @param {String} inputAlign vant中 通过 input-align 属性可以设置输入框内容的对齐方式，可选值为 center、right。
 * @param {Boolean} disabled 是否禁用输入框
 * @param {Boolean} colon 是否在 label 后面添加冒号
 * @param {Boolean} clearable 是否启用清除图标，点击清除图标后会清空输入框
 * @param {String} clearIcon  清除图标名称或图片链接  默认值为clear
 * @param {Array} rules 使用 Field 的rules属性可以定义校验规则
 * @link { https://youzan.github.io/vant/v3/#/zh-CN/home 使用组件:vant }
 */
export const objList = {
    cityId: {
        label: "地区",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "cityId",
        placeholder: "请选择下属单位",
        readonly: true,
        toast: "",
        beAssociatedWith: { //有关联的
            precondition: {
                required: [] //前置条件-必填项
            },
            update: {
                reset: ["examId", "placeId", "placeCode", "subjectId", "subjectLevelId", "theoryId", "turoialIds"] //更新后-重置项
            }
        },
        toPickPageFormPageName: "",
        openFormRefName: {
            type: "Picker",
            name: "PickerName"
        }, //ref type类型 name名称 
        required: true,
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    examId: {
        label: "考试类型",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "examId",
        placeholder: "请选择考试类型",
        readonly: true,
        toast: "请选择考试类型",
        after: ["subjectId", "subjectLevelId", "theoryId", "turoialIds"],
        before: ["cityId"],
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    placeId: {
        label: "报名点",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "placeId",
        placeholder: "请选择",
        readonly: true,
        toast: "请选择报名点",
        after: ["subjectId", "subjectLevelId", "theoryId", "turoialIds"],
        before: ["cityId"],
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    placeCode: {
        label: "考点编号",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: false,
        name: "placeCode",
        placeholder: "输入考点编号",
        readonly: false,
        toast: "请输入考点编号",
        after: ["subjectId", "subjectLevelId", "theoryId", "turoialIds"],
        before: ["cityId"],
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    subjectId: {
        label: "报考科目",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: false,
        name: "subjectId",
        placeholder: "请选择",
        readonly: true,
        toast: "请选择报考科目",
        after: ["subjectLevelId", "theoryId", "turoialIds"],
        before: ["placeId", "placeCode"],
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    subjectLevelId: {
        label: "报考级别",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: false,
        name: "subjectLevelId",
        placeholder: "请选择",
        readonly: true,
        toast: "请选择报考级别",
        after: ["theoryId", "turoialIds"],
        before: ["subjectId"],
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    theoryId: {
        label: "乐理单试",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: false,
        name: "theoryId",
        placeholder: "请选择",
        readonly: true,
        toast: "请选择乐理单试",
        after: ["turoialIds"],
        before: ["examId"],
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    turoialIds: {
        label: "辅导课", //省显示
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: false,
        name: "turoialIds",
        placeholder: "请选择",
        readonly: true,
        toast: "请填写辅导课",
        before: ["placeId", "subjectId", "theoryId"],
        type: "textarea",
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    contact: {
        label: "联系人",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "contact",
        placeholder: "请输入联系人",
        readonly: false,
        toast: "请输入联系人",
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    phone: {
        label: "手机号码",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "phone",
        placeholder: "联系人手机号",
        readonly: false,
        toast: "联系人手机号",
        type: "number",
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    area: {
        label: "所在地区",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "area",
        placeholder: "请选择",
        readonly: true,
        toast: "请选择所在地区",
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    address: {
        label: "详细地址",
        model: {
            Display: "",
            submit: ""
        },
        initializedHidden: true,
        name: "address",
        placeholder: "请填写详细地址",
        readonly: false,
        toast: "请填写详细地址",
        type: "textarea",
        rules: [{
            required: true,
            message: '请输入正确内容'
        }]
    },
    // name: {
    //     index: 12,
    //     label: "真实姓名",
    //     model: "",
    //     if: true,
    //     name: "name",
    //     value: "name",
    //     placeholder: "请输入您的真实姓名",
    //     readonly: false,
    //     functionName: "",
    //     toast: "请输入您的真实姓名",
    //     verify: [],
    //     ResetIndex: [],
    //     type: "text",
    // rules: [{
    // required: true,
    // message: '请输入正确内容'
    // }]
    // },
    // pinyinId: {
    //     index: 13,
    //     label: "真实姓名拼音",
    //     model: "",
    //     if: true,
    //     name: "pinyinId",
    //     value: "pinyin",
    //     placeholder: "请选择您的真实姓名拼音",
    //     readonly: true,
    //     functionName: "",
    //     toast: "请选择您的真实姓名拼音",
    //     verify: [],
    //     ResetIndex: [],
    //     type: "text",
    // rules: [{
    // required: true,
    // message: '请输入正确内容'
    // }]
    // },
    // sexId: {
    //     index: 14,
    //     label: "考生性别",
    //     model: "",
    //     if: true,
    //     name: "sexId",
    //     value: "sex",
    //     placeholder: "请选择",
    //     readonly: true,
    //     functionName: "",
    //     toast: "请选择考生性别",
    //     verify: [],
    //     ResetIndex: [],
    //     type: "text",
    // rules: [{
    // required: true,
    // message: '请输入正确内容'
    // }]
    // },
    // cardType: {
    //     index: 15,
    //     label: "证件类型",
    //     model: "",
    //     if: true,
    //     name: "cardType",
    //     value: "cardTypeValue",
    //     placeholder: "请选择证件类型",
    //     readonly: true,
    //     functionName: "",
    //     toast: "请选择证件类型",
    //     verify: [],
    //     ResetIndex: [],
    //     type: "text",
    // rules: [{
    //     required: true,
    //     message: '请输入正确内容'
    // }]
    // },
    // cardCode: {
    //     index: 16,
    //     label: "证件号码",
    //     model: "",
    //     if: true,
    //     name: "cardCode",
    //     value: "cardCode",
    //     placeholder: "请填写证件号码",
    //     readonly: false,
    //     functionName: "",
    //     toast: "请填写证件号码",
    //     verify: [],
    //     ResetIndex: [],
    //     type: "text",
    // rules: [{
    //     required: true,
    //     message: '请输入正确内容'
    // }]
    // },
    // birthday: {
    //     index: 17,
    //     label: "出生日期",
    //     model: "",
    //     if: true,
    //     name: "birthday",
    //     value: "birthday",
    //     placeholder: "请选择出生日期",
    //     readonly: true,
    //     functionName: "",
    //     toast: "请选择出生日期",
    //     verify: [],
    //     ResetIndex: [],
    //     type: "text",
    // rules: [{
    //     required: true,
    //     message: '请输入正确内容'
    // }]
    // }
}


/**
 * @todo 中间件 useHEditableForm()的configEditableForm数据初始化(太多的话就写在对应页面的index.js,不多的话,就写在页面里面),具体每项说明在useHEditableForm()中...
 */
export const configEditableForm_data = {
    beAssociatedWith: {
        precondition: {
            required: {}
        },
        update: {
            reset: {
                cityId: [
                    "examId",
                    "placeId",
                    "placeCode",
                    "subjectId",
                    "subjectLevelId",
                    "theoryId",
                    "turoialIds",
                ],
            }
        }
    }
}